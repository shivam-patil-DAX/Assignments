# Generated by Django 3.2.14 on 2022-07-19 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todonotes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='notes',
            name='is_done',
            field=models.BooleanField(default=False),
        ),
    ]
