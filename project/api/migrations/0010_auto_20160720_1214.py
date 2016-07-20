# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20160720_1212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filecontent',
            name='file',
            field=models.FileField(upload_to='/media/'),
        ),
    ]
