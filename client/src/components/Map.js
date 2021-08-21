import React from "react";
import { useState } from "react";

import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

//Credits to Codegeous https://github.com/codegeous/react-component-depot/blob/master/src/pages/Leaflet/StaticMap.js
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const interactionOptions = {
  zoomControl: true,
  doubleClickZoom: true,
  closePopupOnClick: false,
  dragging: true,
  zoomSnap: true,
  zoomDelta: true,
  trackResize: true,
  touchZoom: true,
  scrollWheelZoom: false,
};
/**
 * The results are displayed in this dynamic map component. Markers are
 * already made in the parent App component, thus they are merely 
 * used here. Centre properties are used to change the position
 * on the map (To the first result's position) whenever new results are gotten. 
 * @author Apo Ilgun
 */
const Map = ({centreX, centreY, markersToDisplay}) => {
  const [map, setmap] = useState(null);

  //Simple statement to change the view of the map
  if (map) {
    map.flyTo([centreY, centreX]);
  }

  return (
        <div className="map">
          <h2></h2>
            <MapContainer
              whenCreated={setmap}
              center = {[0, 0]} //Default centre, can be changed
              zoom={13}
              className="static-map"
              {...interactionOptions}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markersToDisplay}
            </MapContainer>
        </div>
  );
};

export default Map;