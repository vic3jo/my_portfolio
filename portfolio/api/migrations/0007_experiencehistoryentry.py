# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20160706_2230'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExperienceHistoryEntry',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', serialize=False, auto_created=True)),
                ('position', models.CharField(max_length=100, blank=True, default='')),
                ('company', models.CharField(max_length=120, blank=True, default='')),
                ('startDate', models.DateField()),
                ('endDate', models.DateField()),
                ('description', models.TextField(max_length=1500, blank=True, default='')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
