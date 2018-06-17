from django.urls import path
from .views import *

urlpatterns = [
    path('turmas/', teste),
    path('discente/', testeGrafico),
    path('correlacao/', correlacao),
    path('parCoord/', coordenadasParalelas)
]