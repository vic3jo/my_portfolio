# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_personalprojects'),
    ]

    operations = [
        migrations.CreateModel(
            name='SectionContent',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', serialize=False, auto_created=True)),
                ('label', models.CharField(blank=True, max_length=120, default='')),
                ('description', models.TextField(blank=True, max_length=1000, default='')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
