#!/usr/bin/python3
"""
Author: Victor Trejo
Description: This file contains all the urls.
"""
from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token
from api import views
from api.urls import router
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = patterns(
	'',
    url(r'^$', views.index, name='home'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/token/', obtain_auth_token, name='api-token'),
    url(r'^api/', include(router.urls)),
)

if settings.DEBUG:
	urlpatterns += static(
		settings.MEDIA_URL,
		document_root=settings.MEDIA_ROOT
	)
