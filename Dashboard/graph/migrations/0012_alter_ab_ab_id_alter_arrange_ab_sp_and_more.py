# Generated by Django 4.1.5 on 2023-06-12 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('graph', '0011_alter_an_an_dateoff_alter_app_cus_cus_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ab',
            name='Ab_ID',
            field=models.CharField(max_length=5, verbose_name='業務員ID(PK)/Sp001'),
        ),
        migrations.AlterField(
            model_name='arrange',
            name='Ab_Sp',
            field=models.CharField(max_length=5, verbose_name='業務員ID(PK)/Sp001'),
        ),
        migrations.AlterField(
            model_name='chair',
            name='Chair_pid',
            field=models.CharField(max_length=4, verbose_name='產品id P+001'),
        ),
        migrations.AlterField(
            model_name='chair',
            name='Chair_place',
            field=models.CharField(max_length=4, verbose_name='店家id S+001'),
        ),
        migrations.AlterField(
            model_name='cost',
            name='store_id',
            field=models.CharField(max_length=4, verbose_name='店家id S+001'),
        ),
        migrations.AlterField(
            model_name='cou',
            name='Cp_ID',
            field=models.CharField(blank=True, max_length=19, null=True, verbose_name='進貨批號 CP+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='cu',
            name='Cu_id',
            field=models.CharField(max_length=4, unique=True, verbose_name='編號 C001'),
        ),
        migrations.AlterField(
            model_name='cu',
            name='Cu_userid',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='cus',
            name='Cus_id',
            field=models.CharField(max_length=18, primary_key=True, serialize=False, unique=True, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='cus',
            name='product_past',
            field=models.CharField(blank=True, max_length=4, null=True, verbose_name='產品id P+001'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='feedbackCu_id',
            field=models.CharField(default=0, max_length=4, verbose_name='編號 C001'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='feedcus_id',
            field=models.CharField(default=0, max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='manage',
            name='Cus_id',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='manage',
            name='Sp_id',
            field=models.CharField(max_length=5, verbose_name='業務員ID(PK)/Sp001'),
        ),
        migrations.AlterField(
            model_name='manage',
            name='manage_category',
            field=models.CharField(blank=True, max_length=5, null=True, verbose_name='失敗因素編號(fa+001)'),
        ),
        migrations.AlterField(
            model_name='manage',
            name='store_id',
            field=models.CharField(max_length=4, verbose_name='店家id S+001'),
        ),
        migrations.AlterField(
            model_name='marketing',
            name='Marketing_clerk',
            field=models.CharField(max_length=5, verbose_name='業務員ID(PK)/Sp001'),
        ),
        migrations.AlterField(
            model_name='marketing',
            name='Marketing_client',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='need',
            name='demand_id',
            field=models.CharField(max_length=5, verbose_name='需求類型ID(n+0001)'),
        ),
        migrations.AlterField(
            model_name='order',
            name='Cus_id',
            field=models.CharField(blank=True, max_length=18, null=True, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='order',
            name='Sp_id',
            field=models.CharField(max_length=5, verbose_name='業務員ID(PK)/Sp001'),
        ),
        migrations.AlterField(
            model_name='order_detailed',
            name='order_id',
            field=models.CharField(max_length=22, verbose_name='訂單編號 order+14+random(3)'),
        ),
        migrations.AlterField(
            model_name='order_detailed',
            name='product_id',
            field=models.CharField(max_length=4, verbose_name='產品id P+001'),
        ),
        migrations.AlterField(
            model_name='record',
            name='Cus_id',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='record',
            name='Marketing_id',
            field=models.CharField(max_length=19, verbose_name='編號(M+14date+0001)'),
        ),
        migrations.AlterField(
            model_name='referrer',
            name='Bref_id',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='referrer',
            name='Referrer_ID',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='sp',
            name='Sp_store',
            field=models.CharField(max_length=4, verbose_name='店家id S+001'),
        ),
        migrations.AlterField(
            model_name='storeboard',
            name='store_id',
            field=models.CharField(blank=True, max_length=4, null=True, verbose_name='店家id S+001'),
        ),
        migrations.AlterField(
            model_name='trade',
            name='Cus_id',
            field=models.CharField(max_length=18, verbose_name='客戶編號 c+14日期時間+random(3)'),
        ),
        migrations.AlterField(
            model_name='trade',
            name='Voucher_id',
            field=models.CharField(max_length=8, verbose_name='按摩券編號/Cou00001'),
        ),
        migrations.AlterField(
            model_name='trade',
            name='Voucher_provider',
            field=models.CharField(max_length=5, verbose_name='業務員ID(PK)/Sp001'),
        ),
    ]
