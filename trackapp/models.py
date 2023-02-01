from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Track(models.Model):
    user = models.OneToOneField(User,  null=True, on_delete=models.CASCADE)
    bio = models.CharField(max_length=50,null=True)
    order = models.CharField(max_length=50,default="false")

    orderPlaced = models.CharField(max_length=50,default="false")
    orderPlacedDate = models.CharField(max_length=50,default="___ __ ____")
    orderPlacedtime = models.CharField(max_length=50,default="00:00 AM")
    
    orderShipment = models.CharField(max_length=50,default="false")
    orderShipmentDate = models.CharField(max_length=50,default="___ __ ____")
    orderShipmentTime = models.CharField(max_length=50,default="00:00 AM")

    outForDelivery = models.CharField(max_length=50,default="false")
    outForDeliveryDate = models.CharField(max_length=50,default="___ __ ____")
    outForDeliveryTime = models.CharField(max_length=50,default="00:00 AM")

    delivered = models.CharField(max_length=50,default="false")
    deliveredDate = models.CharField(max_length=50,default="___ __ ____")
    deliveredtime = models.CharField(max_length=50,default="00:00 AM")

    def __str__(self):
        return str(self.user) 
