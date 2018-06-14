from django.http import JsonResponse
import pandas as pd
import numpy as np
import json
from django.views.decorators.csrf import csrf_protect

# Create your views here.

def dataFrameToJson(dataFrame):
    dataFrame = dataFrame.to_json(orient='records')
    dataFrame = json.loads(dataFrame)

    return dataFrame

def teste(request):
    limit = int(request.GET.get('limit'))
    dataFrame = pd.read_csv('turmas.csv').head(limit)

    return JsonResponse(dataFrameToJson(dataFrame))

@csrf_protect
def testeGrafico(request):
    dataFrame = pd.read_csv('matricula20172.csv',sep=';')
    dataFrame = dataFrame.dropna()
    dataFrame = dataFrame[dataFrame['nota']>0]
    colunas = ['discente', 'nota']
    dataFrame = dataFrame[colunas].head(10)

    return JsonResponse({'results':dataFrameToJson(dataFrame)})

@csrf_protect
# Retorna correlação entre duas disciplinas informadas
def correlacao(request):
    discA = request.GET.get('discA')
    discB = request.GET.get('discB')

    dataFrame = pd.read_csv('data_science/df_disciplinas2015New.csv')

    dataFrameA = dataFrame[dataFrame['nome'] == discA]
    dataFrameB = dataFrame[dataFrame['nome'] == discB]

    # filtrando apenas alunos que pagaram ambas as disciplinas
    # series_discentesA = dataFrameA.discente.unique()
    # series_discentesB = dataFrameB.discente.unique()
    #
    # dataFrameA = dataFrameA[dataFrameA['discente'].isin(series_discentesA)]
    # dataFrameB = dataFrameB[dataFrameB['discente'].isin(series_discentesB)]

    # Aprovados no DiscA
    dataFrameA = dataFrameA[dataFrameA['descricao'].str.contains('APROVADO')]

    series_aprovados = dataFrameA.discente.unique()

    df_finalB = pd.DataFrame()

    for dis in series_aprovados:
        linhas = dataFrameB[dataFrameB['discente'] == dis]
        linha = linhas[linhas['periodoano'] == linhas.periodoano.min()]

        df_finalB = pd.concat([df_finalB, linha])

        # concatenando das tabelas
        colunas = ['discente', 'media_final', 'nome']
        dataFrameA = dataFrameA[colunas]
        df_finalB = df_finalB[colunas]

    conc = pd.concat([dataFrameA, df_finalB])

    df = pd.crosstab(conc.discente, conc.nome, conc.media_final, aggfunc=np.mean)
    df = df.dropna()
    df_correlacao = df.corr()

    return JsonResponse({'results': df_correlacao[discA][discB] })