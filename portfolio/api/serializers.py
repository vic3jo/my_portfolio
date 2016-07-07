from rest_framework import serializers
from .models import EducationHistoryEntry, AcademicProjects
from .models import PersonalProjects, SectionContent, Skill

class EducationHistoryEntrySerializer(serializers.ModelSerializer):
	class Meta:
		model = EducationHistoryEntry
		fields = (
			'id',
			'career',
			'institution',
			'startYear',
			'endYear'
		)


class AcademicProjectsSerializer(serializers.ModelSerializer):
	class Meta:
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
	class Meta:
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
	class Meta:
		model = SectionContent
		fields = (
			'id',
			'label',
			'description'
		)


class SkillSerializer(serializers.ModelSerializer):
	class Meta:
		model = Skill
		fields = (
			'id',
			'label',
		)

