# Generated by Django 4.1.5 on 2023-06-11 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('graph', '0007_remove_cus_id_alter_cus_cus_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='arrange',
            name='Ab_Sp',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='graph.sp'),
        ),
        migrations.AlterField(
            model_name='arrange',
            name='Ab_id',
            field=models.CharField(max_length=5, primary_key=True, serialize=False, verbose_name='排班(ar+001)'),
        ),
    ]