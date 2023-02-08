from django.shortcuts import render, redirect
from django.contrib.auth import authenticate , login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from .models import *
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required

# Create your views here.
@never_cache
def home(request):
    if request.user.is_authenticated:
        return redirect('track')
    return render(request,'login.html')

@never_cache
@login_required(login_url='/')
def trackPage(request):
    user = User.objects.filter(username=request.user).first() 
    
    orderPlaced = user.track.orderPlaced
    print(orderPlaced)
    orderShipment = user.track.orderShipment
    outForDelivery = user.track.outForDelivery
    delivered = models.CharField(max_length=50)
    context = {
        'st1':orderPlaced,
        'st2':orderShipment,
        'st4':outForDelivery,
        'st5':delivered
    }
    return render(request,'track.html',context)

def userLogin(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request, user)
            return redirect('track')
        else:
            return redirect('login')
    return redirect('home')


def userlogout(request):
    logout(request)
    return redirect('login')