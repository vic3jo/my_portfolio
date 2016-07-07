from django.db import models
		

class EducationHistoryEntry(models.Model):
	"""Education history entry."""
	career = models.CharField(
		max_length=100,
		blank=True,
		default=''
	)
	institution = models.CharField(
		max_length=100,
		blank=True,
		default=''
	)
	
	startYear = models.PositiveIntegerField()
	endYear = models.PositiveIntegerField()
	
	def __str__(self):
		return "{}-{} ({}-{})".format(
			self.career,
			self.institution,
			self.startYear,
			self.endYear
		)




class AcademicProjects(models.Model):
	"""Academic Projects entry."""
	title = models.CharField(
		max_length = 120,
		blank = True,
		default = ''
	)
	course = models.CharField(
		max_length = 100,
		blank =True,
		default =''
	)

	description = models.TextField(
		max_length = 500,
		blank = True,
		default =''
	)
	
	languages = models.CharField(
		max_length = 100,
		blank = True,
		default =''
	)

	libraries = models.CharField(
		max_length = 300,
		blank = True,
		default = ''
	)

	repositoryUrl = models.URLField(
		max_length = 1000,
		default = ''
	)
	
	def __str__(self):
		return "{}-{}/({}-{}): {} at {}".format(
			self.title,
			self.course,
			self.languages,
			self.libraries,
			self.description,
			self.repositoryUrl
		)


class PersonalProjects(models.Model):
	"""Personal Projects entry."""
	title = models.CharField(
		max_length = 120,
		blank = True,
		default = ''
	)

	description = models.TextField(
		max_length = 500,
		blank = True,
		default = ''
	)
	
	languages = models.CharField(
		max_length = 100,
		blank = True,
		default = ''
	)

	libraries = models.CharField(
		max_length = 300,
		blank = True,
		default = ''
	)
	
	repositoryUrl = models.URLField(
		max_length = 1000,
		default = ''
	)

	def __str__(self):
		return "{}/({}-{}): {} at {}".format(
			self.title,
			self.languages,
			self.libraries,
			self.description,
			self.repositoryUrl
		)




class SectionContent(models.Model):
	"""Section Content entry."""
	label = models.CharField(
		max_length = 120,
		blank = True,
		default = ''
	)

	description = models.TextField(
		max_length = 1000,
		blank = True,
		default =''
	)
	
	def __str__(self):
		return "{}: {}".format(
			self.label,
			self.description
		)


class Skill(models.Model):
	"""Skill."""
	label = models.CharField(
		max_length = 120,
		blank = True,
		default = ''
	)
	
	def __str__(self):
		return self.label



class ExperienceHistoryEntry(models.Model):
	"""Experience history entry."""
	position = models.CharField(
		max_length = 100,
		blank = True,
		default = ''
	)
	company = models.CharField(
		max_length = 120,
		blank = True,
		default = ''
	)
	startDate = models.DateField()
	endDate = models.DateField()
	description = models.TextField(
		max_length = 1500,
		blank = True,
		default =''
	) 
	
	def __str__(self):
		return "{}-{} ({}-{})".format(
			self.position,
			self.company,
			self.startDate,
			self.endDate,
			self.description
		)