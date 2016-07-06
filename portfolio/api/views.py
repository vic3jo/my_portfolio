from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework import viewsets
from .models import EducationHistoryEntry
from .models import AcademicProjects, Skill
from .models import PersonalProjects, SectionContent
from .serializers import EducationHistoryEntrySerializer
from .serializers import AcademicProjectsSerializer
from .serializers import PersonalProjectsSerializer
from .serializers import SectionContentSerializer
from .serializers import SkillSerializer




def index(request):
    return render(
    	request,
    	'index.html',
    	{}
    )



class EducationHistoryEntryViewSet(viewsets.ModelViewSet):
	"""API endpoint for listing the education history."""
	queryset = EducationHistoryEntry.objects.all()
	serializer_class = EducationHistoryEntrySerializer


class AcademicProjectsViewSet(viewsets.ModelViewSet):
	"""API endpoint for listing academic projects."""
	queryset = AcademicProjects.objects.all()
	serializer_class = AcademicProjectsSerializer


class PersonalProjectsViewSet(viewsets.ModelViewSet):
	"""API endpoint for listing personal projects."""
	queryset = PersonalProjects.objects.all()
	serializer_class = PersonalProjectsSerializer


class SectionContentViewSet(viewsets.ModelViewSet):
	"""API endpoint for listing section content."""
	queryset = SectionContent.objects.all()
	serializer_class = SectionContentSerializer


class SkillViewSet(viewsets.ModelViewSet):
	"""API endpoint for listing skills."""
	queryset = Skill.objects.all()
	serializer_class = SkillSerializer



def about(request):
	data = {
		'description':"I am a web developer who is pationate about the Machine Learning topic."
	};
	return JsonResponse(data)