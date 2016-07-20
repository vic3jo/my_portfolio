#!/usr/bin/python3
"""
Author: Victor Trejo
Description: This file contains all the views.
"""
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import authentication, permissions
from .models import EducationHistoryEntry
from .models import ExperienceHistoryEntry
from .models import AcademicProjects, Skill
from .models import PersonalProjects, SectionContent
from .models import FileContent
from .serializers import EducationHistoryEntrySerializer
from .serializers import ExperienceHistoryEntrySerializer
from .serializers import AcademicProjectsSerializer
from .serializers import PersonalProjectsSerializer
from .serializers import SectionContentSerializer
from .serializers import SkillSerializer
from .serializers import FileContentSerializer

LABEL_FIELD = 'label'

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


class FileContentViewSet(
    DefaultsSettings,
    viewsets.ModelViewSet
):
    """API endpoint for listing file content."""
    lookup_field = LABEL_FIELD
    lookup_url_kwarg = LABEL_FIELD
    queryset = FileContent.objects.all()
    serializer_class = FileContentSerializer


def index(request):
    """Index view

    Args:
        request (object): The request object.

    Returns:
        object: a rendered view.
    """
    return render(
        request,
        'index.html',
        {}
    )
