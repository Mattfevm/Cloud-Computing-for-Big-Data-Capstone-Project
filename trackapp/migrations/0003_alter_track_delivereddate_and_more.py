# Generated by Django 4.1.4 on 2022-12-25 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("trackapp", "0002_track_delivereddate_track_orderplaceddate_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="track",
            name="deliveredDate",
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderPlacedDate",
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderShipmentDate",
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="track",
            name="orderTransitDate",
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="track",
            name="outForDeliveryDate",
            field=models.CharField(max_length=50, null=True),
        ),
    ]
