import './App.css';
import Form from './components/Form'
import Map from './components/Map'
import {useState} from 'react'
import {Marker, Popup } from "react-leaflet";
/**
 * App component holds all the other components of the program. 
 * When a user enters the data required, GET request made to the API
 * through fetch, and all the states are changed to display the 
 * results on the map. 
 * @author Apo Ilgun
 */
const App = () => {
  //Centre variables are used to re-position the map according to the location of a restaurant
  const [centreX, setCentreX] = useState(0)
  const [centreY, setCentreY] = useState(0)
  const [markers, setMarkers] = useState([])
  const [markersToDisplay, setMarkersToDisplay] = useState([])

  const getData = (data) => {
    fetch(`/api/restaurants/?restaurantName=${data.name}&zipCode=${data.zipCode}&radius=${data.radius}`, {
      method: 'GET',
    }).then(res => {
        return res.json()
    }).then(jsonResponse => {
         setData(jsonResponse)
         //Looping through all the elements of the markers array, and creating the physical markers
         //using the pre-made leaflet component with JSX.
         console.log(jsonResponse)
         setMarkersToDisplay(markers.map((marker) => { 
           return <Marker position = {[marker.location.coordinates[1], marker.location.coordinates[0]]}> 
                    <Popup> {marker.name} </Popup>
                  </Marker> 
         }))
    }).catch((error) => { //If there's no results gotten, error message is displayed on the screen
      console.log(error)
    })
  }

  const setData = (jsonResponse) => {
    setCentreX(jsonResponse[0].location.coordinates[0])
    setCentreY(jsonResponse[0].location.coordinates[1])
    //Every time the markers array should made empty to prevent the previous results remaining on the screen.
    markers.length = 0 
    jsonResponse.map((resto) => {markers.push(resto)})
    setMarkers(markers)
  }

  return (
    <div className="App">
      <h1>Restaurant Finder</h1>
      <h2 className = 'error'></h2>
      <Form getData={getData}/>
      <br /> <br /> <br />
      <Map
       centreX = {centreX}
       centreY = {centreY}
       markers = {markers}
       markersToDisplay = {markersToDisplay}
      />
    </div>
  )
}

export default App;