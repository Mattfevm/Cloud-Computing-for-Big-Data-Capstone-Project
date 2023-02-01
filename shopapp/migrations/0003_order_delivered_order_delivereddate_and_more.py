# Generated by Django 4.1.5 on 2023-01-20 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shopapp", "0002_address_country"),
    ]

    operations = [
        migrations.AddField(
            model_name="order",
            name="delivered",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="deliveredDate",
            field=models.CharField(default="___ __ ____", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="deliveredtime",
            field=models.CharField(default="00:00 AM", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="orderPlaced",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="orderPlacedDate",
            field=models.CharField(default="___ __ ____", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="orderPlacedtime",
            field=models.CharField(default="00:00 AM", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="orderShipment",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="orderShipmentDate",
            field=models.CharField(default="___ __ ____", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="orderShipmentTime",
            field=models.CharField(default="00:00 AM", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="outForDelivery",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="outForDeliveryDate",
            field=models.CharField(default="___ __ ____", max_length=50),
        ),
        migrations.AddField(
            model_name="order",
            name="outForDeliveryTime",
            field=models.CharField(default="00:00 AM", max_length=50),
        ),
    ]
