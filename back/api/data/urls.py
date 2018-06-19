from django.urls import path
from .views import *

urlpatterns = [
    path('turmas/', testeServico),
    path('discente/', testeGrafico),
    path('disciplinas/', disciplinasPeriodo),
    path('correlacao/', correlacao),
    path('parCoord/', coordenadasParalelas)
]