# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-11-10 02:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('foodpantry', '0003_auto_20181109_1952'),
    ]

    operations = [
        migrations.RenameField(
            model_name='inventory',
            old_name='created_date',
            new_name='createddate',
        ),
    ]
