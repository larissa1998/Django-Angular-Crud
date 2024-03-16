from django.urls import path
from .views import PessoaCriar, PessoaListagem, PessoaDetalhe, PessoaPesquisar, helloWorld

urlpatterns = [
    path('pessoas/', PessoaListagem.as_view(), name="pessoa_listagem"),
    path('pessoas/nova/', PessoaCriar.as_view(), name='pessoa_criar'),
    path('pessoas/<int:pk>/', PessoaDetalhe.as_view(), name='pessoa-detalhe'),
    path('pessoas/pesquisar/', PessoaPesquisar.as_view(), name='pessoa_pesquisar'),
    path('hello/', helloWorld, name='hello-world')
]
