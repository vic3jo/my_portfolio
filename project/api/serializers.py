#!/usr/bin/python3
"""
Author: Victor Trejo
Description: This file contains all the serializers.
"""
from rest_framework import serializers
from .models import EducationHistoryEntry, AcademicProjects
from .models import PersonalProjects, SectionContent
from .models import ExperienceHistoryEntry, Skill

class EducationHistoryEntrySerializer(serializers.ModelSerializer):
    """
    Education history entry serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = EducationHistoryEntry
        fields = (
            'id',
            'career',
            'institution',
            'startYear',
            'endYear'
        )

class ExperienceHistoryEntrySerializer(serializers.ModelSerializer):
    """
    Experience history entry serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = ExperienceHistoryEntry
        fields = (
            'id',
            'position',
            'company',
            'startDate',
            'endDate',
            'description'
        )


class AcademicProjectsSerializer(serializers.ModelSerializer):
    """
    Academic projects serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = AcademicProjects
        fields = (
            'id',
            'title',
            'course',
            'languages',
            'libraries',
            'description',
            'repositoryUrl'
        )


class PersonalProjectsSerializer(serializers.ModelSerializer):
    """
    Personal projects serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = PersonalProjects
        fields = (
            'id',
            'title',
            'languages',
            'libraries',
            'description',
            'repositoryUrl'
        )


class SectionContentSerializer(serializers.ModelSerializer):
    """
    Section content serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = SectionContent
        fields = (
            'id',
            'label',
            'description'
        )


class SkillSerializer(serializers.ModelSerializer):
    """
    Skills serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = Skill
        fields = (
            'id',
            'label',
        )
