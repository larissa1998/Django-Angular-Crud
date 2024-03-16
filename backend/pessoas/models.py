from django.db import models
class Pessoa(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    sexo = models.CharField(max_length=255)
    data_nasc = models.DateField()
    cpf = models.CharField(max_length=255)
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    peso = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.nome
