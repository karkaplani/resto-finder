# Resto Finder

Resto Finder is an elegant full-stack web application developed using various technologies like React, Flask and MongoDB to provide user to search the nearby restaurants using a keyword, postal code, and radius. The product can be tried from [here.]() If you want to install and use the development app, instructions can be found after the Background and Technologies sections. 

## Background
It was a term project for the Advanced Database class, and intended to be developed in a team. The main frame was using MongoDB with Python.  The application was developed by me and Marcelo Monteiro de Silva with the helps of Janio Mendonca Junior. The other three members of the team, Pardis Feizi, Fargol Azimi and Farideh Shiran were obligated with the research and report part of the project. In the end, every step done were reported, and a general overview of the application was presented in a class environment resulted in A+ grade for the project. 

After the school side of the project was done with the first prototype, I have worked more on the design, and deployed the app on Heroku for the backend server, and GitHub pages for the app demo with the frontend. 

## Technologies Used
From bottom to the top;
- **MongoDB** (Atlas) as the database. The restaurant info consist of roughly 25k restaurants stored in the cloud.
- **Flask** as the backend Python framework. Database connectivity, server, and the route to get the restaurant info was built using it.
- **GeoPy** as a handy Python library to do the location calculations.
- **React** for the frontend, and **react-leaflet** as the map library

## Installation
After cloning the repository to your machine
``` 
git clone https://github.com/karkaplani/resto-finder.git
```
Install the required dependencies 
```
pip install -r requirements.txt
```
Then, create a credentials.pwd file. Use the followin credentials, which has read-only permission on the database. If you want to contribute, contact the author to get an admin credentials.
```
apo
OOVZk6AHdW8exmRK
```
Now, navigate to the client folder by `cd client`

Install the frontend dependencies 
``` 
npm install
```

Go back to the root folder again by `cd ..`

## Starting the Application
After installing the dependencies, while in the root directory, run the following command to start the local backend development server on port 5000
```
python main.py
```
**While the backend server is running,** open another terminal, and navigate to the client folder again by `cd client` and run  the following to start the React server
```
npm start
```
That's it! The frontend server is using the port 5000 as the proxy, so all the requests will be made to the Python server.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)