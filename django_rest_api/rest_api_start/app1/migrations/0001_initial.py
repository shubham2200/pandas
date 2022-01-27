# Generated by Django 4.0.1 on 2022-01-24 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField(auto_created=True)),
                ('name', models.CharField(blank=True, max_length=30, null=True)),
                ('task', models.CharField(max_length=13)),
            ],
        ),
    ]