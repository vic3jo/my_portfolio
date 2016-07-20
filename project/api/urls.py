#!/usr/bin/python3
"""
Author: Victor Trejo
Description: This file contains all the tests.
"""
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(
    r'education-history',
    views.EducationHistoryEntryViewSet
)


router.register(
    r'experience-history',
    views.ExperienceHistoryEntryViewSet
)

router.register(
    r'academic-projects',
    views.AcademicProjectsViewSet
)

router.register(
    r'personal-projects',
    views.PersonalProjectsViewSet
)

router.register(
    r'section',
    views.SectionMultipleContentViewSet
)

router.register(
    r'section-content',
    views.ContentViewSet
)

router.register(
    r'skills',
    views.SkillViewSet
)

router.register(
    r'file-content',
    views.FileContentViewSet
)
