# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-11-10 01:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('foodpantry', '0002_auto_20181108_1900'),
    ]

    operations = [
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemcode', models.IntegerField(unique=True)),
                ('itemname', models.CharField(max_length=25, unique=True)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='inventory',
            unique_together=set([('itemcode', 'itemname')]),
        ),
    ]
