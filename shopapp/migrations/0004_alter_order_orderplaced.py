# Generated by Django 4.1.5 on 2023-01-20 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shopapp", "0003_order_delivered_order_delivereddate_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="orderPlaced",
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
