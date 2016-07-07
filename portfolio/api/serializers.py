from rest_framework import serializers
from .models import EducationHistoryEntry, AcademicProjects
from .models import PersonalProjects, SectionContent
from .models import ExperienceHistoryEntry, Skill

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

class ExperienceHistoryEntrySerializer(serializers.ModelSerializer):
	class Meta:
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

