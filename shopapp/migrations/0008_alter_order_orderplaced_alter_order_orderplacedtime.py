# Generated by Django 4.1.5 on 2023-01-24 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shopapp", "0007_alter_order_orderplaceddate_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="orderPlaced",
            field=models.CharField(default="true", max_length=50),
        ),
        migrations.AlterField(
            model_name="order",
            name="orderPlacedtime",
            field=models.CharField(default="15:12 PM", max_length=50),
        ),
    ]