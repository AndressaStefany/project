from django.http import JsonResponse
import pandas as pd
import numpy as np
import json
from django.views.decorators.csrf import csrf_protect
import os # os.getcwd()

def dataFrameToJson(dataFrame):
    dataFrame = dataFrame.to_json(orient='records')
    dataFrame = json.loads(dataFrame)

    return dataFrame

@csrf_protect
def teste(request):
    limit = int(request.GET.get('limit'))
    dataFrame = pd.read_csv('data_science/turmas-2010-2017-ok.csv').head(limit)

    return JsonResponse(dataFrameToJson(dataFrame),safe=False)

@csrf_protect
def testeGrafico(request):
    print(os.getcwd())
    dataFrame = pd.read_csv('data_science/matriculas_new/matricula-componente-20172.csv',sep=';')
    dataFrame = dataFrame.dropna()
    dataFrame = dataFrame[dataFrame['nota']>0]
    colunas = ['discente', 'nota']
    dataFrame = dataFrame[colunas].head(10)

    return JsonResponse({'results':dataFrameToJson(dataFrame)})

# Retorna (int) correlação entre duas disciplinas informadas
def simpleCorrelacao(discA,discB):
    dataFrame = pd.read_csv('data_science/turmas_new.csv')
    dataFrameA = dataFrame[dataFrame['nome'] == discA]
    dataFrameB = dataFrame[dataFrame['nome'] == discB]

    # Aprovados no DiscA
    dataFrameA = dataFrameA[dataFrameA['descricao'].str.contains('APROVADO')]
    series_aprovados = dataFrameA.discente.unique()

    df_finalB = pd.DataFrame()

    for dis in series_aprovados:
        linhas = dataFrameB[dataFrameB['discente'] == dis]
        linha = linhas[linhas['periodoano'] == linhas.periodoano.min()]

        df_finalB = pd.concat([df_finalB, linha])

    colunas = ['discente', 'media_final', 'nome']
    dataFrameA = dataFrameA[colunas]
    df_finalB = df_finalB[colunas]

    conc = pd.concat([dataFrameA, df_finalB])

    df = pd.crosstab(conc.discente, conc.nome, conc.media_final, aggfunc=np.mean)
    df = df.dropna()
    df_correlacao = df.corr()

    # return JsonResponse({'results': df_correlacao[discA][discB] })
    return df_correlacao[discA][discB]


# Calcula a correlação de uma lista de disciplinas
@csrf_protect
def correlacao(request):
    args = request.GET.get('lista')
    lista_disciplinas = args.split(',')

    # matriz de zeros
    w, h = len(lista_disciplinas), len(lista_disciplinas)
    content = [[0] * w for i in range(h)]
    correlacoes = np.array(content, dtype='f')

    # calculo das relacões sem repetição
    for i in range(0, len(lista_disciplinas)):
        for j in range(0, len(lista_disciplinas)):
            if i == j:
                correlacoes[i][j] = 1
            if i < j:
                correlacoes[i][j] = simpleCorrelacao(lista_disciplinas[i], lista_disciplinas[j])

    df_retorno = pd.DataFrame(correlacoes, columns=lista_disciplinas)
    # df_retorno = df_retorno.set_axis(lista_disciplinas, axis=0, inplace=False)

    return JsonResponse({'results':dataFrameToJson(df_retorno)})

# Retorna
@csrf_protect
def coordenadasParalelas(request):
    args = request.GET.get('lista')
    lista_disciplinas = args.split(',')

    dataFrame = pd.read_csv('data_science/turmas_new.csv')

    # Contando reprovações de media_final notnull
    df_contagemRep = dataFrame[dataFrame['descricao'].str.contains('REPROVADO')]
    df_contagemRep = df_contagemRep[df_contagemRep.media_final.notnull()]

    colunas_1 = ['descricao', 'discente', 'media_final', 'id_turma', 'nome']
    df_contagemRep = df_contagemRep[colunas_1].drop_duplicates()
    df_contagemRep = df_contagemRep[df_contagemRep['nome'].isin(lista_disciplinas)]
    df_contagemRep = df_contagemRep.groupby(['discente']).descricao.count().reset_index()

    # Aprovados e não foram reprovados
    series_Rep = df_contagemRep['discente']
    df_NRep = dataFrame[dataFrame['descricao'].str.contains('APROVADO')]

    # tirando os reprovados
    df_NRep = df_NRep[~df_NRep['discente'].isin(series_Rep)]
    df_NRep = df_NRep[df_NRep.media_final.notnull()]

    colunas_2 = ['descricao', 'discente', 'media_final', 'id_turma', 'nome']
    df_NRep = df_NRep[colunas_2].drop_duplicates()
    df_NRep = df_NRep[df_NRep['nome'].isin(lista_disciplinas)]

    # junta APROVADOS e REPROVADOS
    aprovados = pd.DataFrame()
    aprovados['discente'] = df_NRep['discente']
    aprovados['descricao'] = df_NRep['descricao']

    aprovados = aprovados.replace('APROVADO', 0)
    aprovados = aprovados.replace('APROVADO POR NOTA', 0)

    df_contagem = pd.concat([df_contagemRep, aprovados])
    colunas = ['discente', 'nome', 'media_final']

    # tirando duplicados e NaN
    grafico = dataFrame[colunas].drop_duplicates().dropna()
    grafico = grafico[grafico['nome'].isin(lista_disciplinas)]
    df_grafico = pd.crosstab(grafico.discente, grafico.nome, grafico.media_final, aggfunc=np.max).reset_index()
    df_grafico = pd.merge(df_grafico, df_contagem, on='discente', how='left')
    df_grafico = df_grafico.fillna(0)

    retorno = []
    blocos = {}

    for disc in lista_disciplinas:
        lista = np.array(df_grafico[disc].head()).tolist()

        blocos['range'] = [0,10]
        blocos['label'] = disc
        blocos['valor'] = lista
        retorno.append(blocos)

    # return JsonResponse({'dimensions':{'range':[0,10], 'label':lista_disciplinas, 'valor':valor}})
    return JsonResponse({'dimensions': retorno})
