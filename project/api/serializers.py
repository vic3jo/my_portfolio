#!/usr/bin/python3
"""
Author: Victor Trejo
Description: This file contains all the serializers.
"""
from rest_framework import serializers
from .models import EducationHistoryEntry, AcademicProjects
from .models import PersonalProjects, SectionMultipleContent
from .models import ExperienceHistoryEntry, Skill
from .models import FileContent, Content

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


class SectionMultipleContentSerializer(serializers.ModelSerializer):
    """
    Section multiple content serializer.
    """
    contents = serializers.SerializerMethodField('get_content_values')
    class Meta:
        """
        Meta class.
        """
        model = SectionMultipleContent
        fields = (
            'id',
            'label',
            'contents'
        )

    def get_content_values(self, obj):
        result = {}
        for x in obj.content_set.all():
            data = ContentSerializer(x).data
            result[data['label']] = data
        return result


class ContentSerializer(serializers.ModelSerializer):
    """
    Content serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = Content
        fields = (
            'id',
            'label',
            'description',
            'section_multiple_content'
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

class FileContentSerializer(serializers.ModelSerializer):
    """
    File contentt serializer.
    """
    class Meta:
        """
        Meta class.
        """
        model = FileContent
        fields = (
            'id',
            'label',
            'file'
        )
