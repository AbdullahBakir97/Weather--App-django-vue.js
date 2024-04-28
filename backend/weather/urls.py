from django.urls import path
from .views import get_weather, get_city_coordinates

urlpatterns = [
    path('weather/', get_weather, name='get_weather'),
    path('city/', get_city_coordinates, name='get_city_coordinates'),
]