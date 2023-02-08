from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('track/',views.trackPage,name='track'),
    path('login/',views.userLogin,name='login'),
    path('logout',views.userlogout,name='logout'),
]