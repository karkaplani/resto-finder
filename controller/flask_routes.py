"""
This program creates the routes for the view (web application) and provides communication
between view and model (MongoDB database)
Author: Group5 members
Course: CST8276 - Spring2021
Date: 03/06/2021
Version: 1.0
"""
from flask import Flask
from flask import render_template, request, jsonify
from controller import restaurant_search
from geopy.geocoders import Nominatim

app = Flask(__name__, template_folder="../view/templates")


@app.route("/")
def hello_world():
    """
    This function if for test purpose only to create a route to test a basic form
    """
    return render_template("index.html")


@app.route("/", methods=["GET", "POST"])
def restaurant_finder_html_form():
    """
    This function if for test purpose only to create a route to test a basic form
    """
    restaurant_name = request.form['restaurantName']
    if restaurant_name != "":
        restaurant_prepared_statement = {'name': {'$regex': restaurant_name, "$options": "i"}}
        results = restaurant_search.find_many_by_name(restaurant_prepared_statement)
        if len(results) == 0:
            results = {"Response": 0}
    else:
        results = {"Response": 0}
    return jsonify(results)


@app.route("/api/restaurants/", methods=["GET", "POST"])
def restaurant_finder():
    """
    This function accepts GET and POST requests, saves name of the restaurant, zip code and radius
    and calls the controller to query de database and and returns a list of restaurants to the front-end
    """
    restaurant_name = request.args.get('restaurantName')
    zip_code = request.args.get('zipCode')
    radius_in_meters = request.args.get('radius')

    if zip_code == '':
        geo_locator = Nominatim(user_agent='myapplication')
        location = geo_locator.geocode(zip_code, country_codes="US")
        lat = location.raw['lat']
        lon = location.raw['lon']
        results = restaurant_search.find_many_by_zip_code(restaurant_name, int(radius_in_meters), lat, lon)
    else:
        restaurant_prepared_statement = {'name': {'$regex': restaurant_name, "$options": "i"}}
        results = restaurant_search.find_many_by_name(restaurant_prepared_statement)
    return jsonify(results)


def start_server(host_ip, debug_mode):
    """
    This function starts flask server to run the back-end
    """
    app.run(host=host_ip, debug=debug_mode)
