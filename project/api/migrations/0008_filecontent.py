# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_experiencehistoryentry'),
    ]

    operations = [
        migrations.CreateModel(
            name='FileContent',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('label', models.CharField(max_length=120, default='', blank=True)),
                ('file', models.FileField(upload_to='uploads/')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
