import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function MapBox() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: -122.4,
    latitude: 37.8,
    zoom: 11,
  })
  return (
    <ReactMapGL
      mapStyle='mapbox://styles/tinyyuusha/cldxpqlob000201m2r8cnxj36'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={viewState => setViewport(viewState)}
    >
    </ReactMapGL>
  )
}