# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20160720_1324'),
    ]

    operations = [
        migrations.CreateModel(
            name='SkillCategory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('label', models.CharField(default='', blank=True, max_length=120)),
                ('description', models.TextField(default='', blank=True, max_length=500)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='skill',
            name='description',
            field=models.TextField(default='', blank=True, max_length=500),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='skill',
            name='url',
            field=models.URLField(default='', max_length=1000),
            preserve_default=True,
        ),
    ]
