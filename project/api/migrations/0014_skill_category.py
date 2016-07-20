# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20160720_1802'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='category',
            field=models.ForeignKey(default=1, to='api.SkillCategory'),
            preserve_default=False,
        ),
    ]
