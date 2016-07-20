# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_filecontent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filecontent',
            name='file',
            field=models.FileField(upload_to='/home/victor/Documents/programming/my_portfolio/project/media'),
        ),
    ]
