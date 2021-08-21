"""
This program uses mongodb.py module to connect to a Mongodb Atlas cluster and retrieves data
from a MongoDB database.
Author: Group5 members
Course: CST8276 - Spring2021
Date: 23/05/2021
Version: 2.0
"""
# Import connect_to_mongo function from mongodb module
from controller import flask_routes

# Run the program
if __name__ == "__main__":
    # Start the back-end
    flask_routes.start_server("127.0.0.1", True)
