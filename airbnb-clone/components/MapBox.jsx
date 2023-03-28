import { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl';

export default function MapBox() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 11
      }}
      style={{
        width: "100vw",
        height: "100vh"
      }}
      mapStyle='mapbox://styles/tinyyuusha/clfsu443i000001pcnvfcj3ky'
      mapboxAccessToken={process.env.mapbox_key}
    >
      <NavigationControl />
    </Map>
  )
}