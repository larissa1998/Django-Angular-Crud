from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .models import Pessoa
from .serializer import PessoaSerializer

class PessoaListagem(generics.ListCreateAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer

class PessoaDetalhe(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer

class PessoaCriar(generics.CreateAPIView):
    model = Pessoa
    fields = ['nome', 'data_nasc', 'cpf', 'sexo', 'altura', 'peso']
    success_url = '/pessoas/'

class PessoaPesquisar(generics.ListAPIView):
    queryset = Pessoa.objects.all() 
    serializer_class = PessoaSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        pesquisa = self.request.query_params.get('pesquisa', None)

        if pesquisa:
            queryset = queryset.filter(
                nome__icontains=pesquisa) | queryset.filter(
                cpf__icontains=pesquisa) | queryset.filter(
                sexo__icontains=pesquisa)

        return queryset

def helloWorld(HttpRequest):
    return HttpResponse("Hello World")
