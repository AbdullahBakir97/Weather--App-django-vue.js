from django.shortcuts import render
from django.http import JsonResponse
import requests
import os
from dotenv import load_dotenv


load_dotenv()

def get_weather(request):
    api_key = os.environ.get('TOMORROW_API_KEY')
    location = request.GET.get('location', 'Berlin') 
    url = f"https://api.tomorrow.io/v4/weather/realtime?location={location}&apikey={api_key}"
    headers = {"accept": "application/json"}

    try:
        response = requests.get(url, headers=headers)
        data = response.json()
        return JsonResponse(data)
    except requests.RequestException as e:
        return JsonResponse({'error': 'Error occurred during the API request.'})

def get_city_coordinates(request):
    if request.method == 'GET':
        city = request.GET.get('city', '')

        api_key = os.environ.get('GOOGLE_API_KEY')
        geocoding_url = f'https://maps.googleapis.com/maps/api/geocode/json?address={city}&key={api_key}'

        try:
            response = requests.get(geocoding_url)
            data = response.json()

            if data['status'] == 'OK':
                results = data['results']
                if results:
                    location = results[0]['geometry']['location']
                    latitude = location['lat']
                    longitude = location['lng']
                    return JsonResponse({'latitude': latitude, 'longitude': longitude})
                else:
                    return JsonResponse({'error': 'No results found for the city.'})
            else:
                return JsonResponse({'error': 'Error occurred during geocoding.'})
        except requests.exceptions.RequestException as e:
            return JsonResponse({'error': 'Error occurred during the API request.'})

    return JsonResponse({'error': 'Invalid request method.'})