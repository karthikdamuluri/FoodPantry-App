# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-12-03 20:31
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('foodpantry', '0008_auto_20181129_2043'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='donor',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='foodpantry.Donor'),
        ),
    ]