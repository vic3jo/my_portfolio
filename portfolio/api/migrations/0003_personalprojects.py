# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_academicprojects'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonalProjects',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(default='', blank=True, max_length=120)),
                ('description', models.TextField(default='', blank=True, max_length=500)),
                ('languages', models.CharField(default='', blank=True, max_length=100)),
                ('libraries', models.CharField(default='', blank=True, max_length=300)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
