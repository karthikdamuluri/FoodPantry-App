# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-11-09 01:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('foodpantry', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='volunteer',
            old_name='cell_phone',
            new_name='cellphone',
        ),
        migrations.RenameField(
            model_name='volunteer',
            old_name='created_date',
            new_name='createddate',
        ),
        migrations.RenameField(
            model_name='volunteer',
            old_name='updated_date',
            new_name='updateddate',
        ),
        migrations.RenameField(
            model_name='volunteer',
            old_name='vol_dob',
            new_name='voldob',
        ),
        migrations.RenameField(
            model_name='volunteer',
            old_name='vol_notes',
            new_name='volnotes',
        ),
        migrations.RenameField(
            model_name='volunteer',
            old_name='vol_number',
            new_name='volnumber',
        ),
    ]
