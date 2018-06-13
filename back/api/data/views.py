from django.http import JsonResponse
import pandas as pd
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
    teste = int(request.GET.get('username'))
    print(teste)

    dataFrame = pd.read_csv('data_science/df_disciplinas2015.csv')

    discA = 'CÁLCULO I'
    discB = 'CÁLCULO II'

    dataFrameA = dataFrame[dataFrame['nome'] == discA]
    dataFrameB = dataFrame[dataFrame['nome'] == discB]

    series_discentes = dataFrame.discente.unique()

    # pegar nota de c1 mais antiga e a mais nova de c2

    return JsonResponse({'results':'ok'})