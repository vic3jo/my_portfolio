# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20160720_1321'),
    ]

    operations = [
        migrations.RenameField(
            model_name='content',
            old_name='dude',
            new_name='section_multiple_content',
        ),
    ]
