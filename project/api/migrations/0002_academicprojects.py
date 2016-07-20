# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicProjects',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=120)),
                ('course', models.CharField(blank=True, default='', max_length=100)),
                ('description', models.TextField(blank=True, default='', max_length=500)),
                ('languages', models.CharField(blank=True, default='', max_length=100)),
                ('libraries', models.CharField(blank=True, default='', max_length=300)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
