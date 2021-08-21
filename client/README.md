# Client Side

The frontend of the project is made by React and Leaflet libraries. All the explanation can be found in the documentation of src/App.js, src/components/Form.js and Map.js files. The application is connected with the routes by Fetch API. 

## Steps for running the app

After following the instructions to install the dependencies and set the credentials in the main project directory README, to start the server, run:
### `python main.py`

Then, the server will start on port 5000. Keep this terminal open. Open another terminal and go into the client folder by cd client, and run: 
### `npm install`
This will install the required dependencies set in the package.json folder.

Lastly, the application should be started in the React's default port 3000. The proxy value is already set to the backend server's URL, so whenever a fetch request is made, it will go to the port 5000 instead of 3000. Run:
### `npm start`
If your device does not have npm (Node Package Manager) installed, you can try replacing npm with 'yarn'. If neither of them are installed, download npm from its website. 

To try the app, put Kentucky Fried Chicken to the keywords box and search. It will show all the results on the map. Also, Burger King can be tried. 

# Further

So far it's the prototype of the application, and only gets the results by the restaurant name. The other values will be used as well in the next versions. Also, the error handling is not properly done and made a temporary handling for the developer side merely for the application to not to crash.

Also, it has a temporary UI design, which will be improved with CSS or SASS to make it more professional looking, as well as having responsive feature for it to be used in all platforms.
