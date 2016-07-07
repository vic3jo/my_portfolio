# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_skill'),
    ]

    operations = [
        migrations.AddField(
            model_name='academicprojects',
            name='repositoryUrl',
            field=models.URLField(default='', max_length=1000),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='personalprojects',
            name='repositoryUrl',
            field=models.URLField(default='', max_length=1000),
            preserve_default=True,
        ),
    ]
