from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework import authentication, permissions
from .models import EducationHistoryEntry
from .models import ExperienceHistoryEntry
from .models import AcademicProjects, Skill
from .models import PersonalProjects, SectionContent
from .serializers import EducationHistoryEntrySerializer
from .serializers import ExperienceHistoryEntrySerializer
from .serializers import AcademicProjectsSerializer
from .serializers import PersonalProjectsSerializer
from .serializers import SectionContentSerializer
from .serializers import SkillSerializer
from django.contrib.auth.models import User



class DefaultsSettings(object):
	"""Default settings for view authentication, permissions."""
	
	authentication_classes = (
		authentication.SessionAuthentication,
	)
	
	permission_classes = (
		permissions.IsAuthenticatedOrReadOnly,
	)


class EducationHistoryEntryViewSet(
	DefaultsSettings,
	viewsets.ModelViewSet
):
	"""API endpoint for listing the education history."""
	queryset = EducationHistoryEntry.objects.all()
	serializer_class = EducationHistoryEntrySerializer


class ExperienceHistoryEntryViewSet(
	DefaultsSettings,
	viewsets.ModelViewSet
):
	"""API endpoint for listing the experience history."""
	queryset = ExperienceHistoryEntry.objects.all()
	serializer_class = ExperienceHistoryEntrySerializer


class AcademicProjectsViewSet(
	DefaultsSettings,
	viewsets.ModelViewSet
):
	"""API endpoint for listing academic projects."""
	queryset = AcademicProjects.objects.all()
	serializer_class = AcademicProjectsSerializer


class PersonalProjectsViewSet(
	DefaultsSettings,
	viewsets.ModelViewSet
):
	"""API endpoint for listing personal projects."""
	queryset = PersonalProjects.objects.all()
	serializer_class = PersonalProjectsSerializer


LABEL_FIELD = 'label'
class SectionContentViewSet(
	DefaultsSettings,
	viewsets.ModelViewSet
):
	"""API endpoint for listing section content."""
	lookup_field = LABEL_FIELD
	lookup_url_kwarg = LABEL_FIELD
	queryset = SectionContent.objects.order_by(
		LABEL_FIELD
	)
	serializer_class = SectionContentSerializer


class SkillViewSet(
	DefaultsSettings,
	viewsets.ModelViewSet
):
	"""API endpoint for listing skills."""
	queryset = Skill.objects.all()
	serializer_class = SkillSerializer


def index(request):
	return render(
		request,
		'index.html',
		{}
	)