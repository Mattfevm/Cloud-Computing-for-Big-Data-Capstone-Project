# Generated by Django 4.1.4 on 2022-12-25 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("trackapp", "0004_alter_track_order"),
    ]

    operations = [
        migrations.AlterField(
            model_name="track",
            name="delivered",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="deliveredDate",
            field=models.CharField(default="mmm dd,yy", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderPlaced",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderPlacedDate",
            field=models.CharField(default="mmm dd,yy", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderShipment",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderShipmentDate",
            field=models.CharField(default="mmm dd,yy", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderTransit",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderTransitDate",
            field=models.CharField(default="mmm dd,yy", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="outForDelivery",
            field=models.CharField(default="false", max_length=50),
        ),
        migrations.AlterField(
            model_name="track",
            name="outForDeliveryDate",
            field=models.CharField(default="mmm dd,yy", max_length=50),
        ),
    ]