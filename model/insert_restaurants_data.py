"""
This program creates the restaurant database/collection in the MongoDB Atlas cloud cluster
and populates de collection with all documents from collections/restaurants.json file.
Author: Group5 members
Course: CST8276 - Spring2021
Date: 23/05/2021
Version: 2.0
"""
# Import connect_to_mongo function from mongodb module
from mongodb import connect_to_mongodb
import bson.json_util as bson
import sys
import os

# Defining database and collection name to connect to mongodb cluster
database_name = "test_db"
collection_name = "test"
# Collection json file to be imported into mongodb database
collection_file = '/../collections/test.json'
# Credentials file path and name
credentials_file = "/../credentials.pwd"

# Connect to mongodb with mongodb module
client = connect_to_mongodb(database_name, credentials_file)
# Defining database to work with
db = client[database_name]
# Defining collection to work with
collection = db[collection_name]


def create_and_populate_database(collection_file):
    """
    This function creates a database and collection in the MongoDB server
    :param collection_file: Json file with all documents to be inserted in the collection
    """
    try:
        # Reads the json file and save the content in the variable documents
        with open(os.path.dirname(__file__) + collection_file, ) as file:
            documents = file.readlines()
            file.close()
    except FileNotFoundError as error:
        print(error)
        sys.exit(1)

    # Loop through the documents variable and convert/loads each string line to json and insert in the collection
    counter = 0
    for document in documents:
        counter += 1
        collection.insert_one(bson.loads(document))
        print(f"Progress: {int(counter / len(documents) * 100)}%")


# Runs the program
if __name__ == "__main__":
    # Call create_and_populate_database and pass the collection file path as argument
    create_and_populate_database(collection_file)
