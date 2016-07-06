from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.






def index(request):
    return render(
    	request,
    	'index.html',
    	{}
    )



def educationHistory(request):
	data = [
		{
			'id':2,
			'career': "BS. Telecommunications Engineering",
			'institution': "Pontificia Universidad Catolica Madre y Maestra (PUCMM)",
			'startYear': 2006,
			'endYear': 2011
		},
		{
			'id':1,
			'career': "MS. Computer Science",
			'institution': "Rochester Institute of Technology",
			'startYear': 2014,
			'endYear': 2016
		}
	];

	return JsonResponse(data, safe=False)


def academicProjects(request):
	data = [
		{
			'id':1,
			'title': "Anomaly-based and Misuse-based Intrusion Detection systems",
			'course': "Intelligent and Secure Systems",
			'description': "This project consisted of creating Anomaly-based and Misuse-based Intrusion Detection systems using Decision Trees and Multi-Layer Perceptron Neural Network.",
			'languages': "Python",
			'libraries':"PyBrain, Numpy"
		}
	];
	return JsonResponse(data, safe=False)




def personalProjects(request):
	data = [
		{
			'id':1,
			'title': "Anomaly-based and Misuse-based Intrusion Detection systems",
			'course': "Intelligent and Secure Systems",
			'description': "This project consisted of creating Anomaly-based and Misuse-based Intrusion Detection systems using Decision Trees and Multi-Layer Perceptron Neural Network.",
			'languages': "Python",
			'libraries':"PyBrain, Numpy"
		}
	];
	return JsonResponse(data, safe=False)


def about(request):
	data = {
		'description':"I am a web developer who is pationate about the Machine Learning topic."
	};
	return JsonResponse(data)