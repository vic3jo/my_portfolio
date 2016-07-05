from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.http import HttpResponse
from api import views


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'portfolio.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='home'),
)
