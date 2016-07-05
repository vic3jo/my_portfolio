from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# def index(request):
# 	return HttpResponse('It works!')




def index(request):
    # View code here...
    return render(request, 'index.html', {
        'foo': 'bar',
    })