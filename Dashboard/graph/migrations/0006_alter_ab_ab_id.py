# Generated by Django 4.1.5 on 2023-06-11 08:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('graph', '0005_alter_manage_manage_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ab',
            name='Ab_ID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='graph.sp'),
        ),
    ]
