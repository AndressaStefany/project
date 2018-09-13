from django.urls import path
from .views import *

urlpatterns = [
    path('disciplinas/', disciplinasPeriodo),
    path('desviopadrao/', desvioPadrao),
    path('media/', media),
    path('notas/', notas),
    path('notasfiltro/', notasFiltro),
    path('correlacao/', correlacao),
    path('parCoord/', coordenadasParalelas),
    path('qntDiscentes/', qntDiscentes)
]
