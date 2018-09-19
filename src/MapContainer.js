import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100hv'
    }
    if (!this.props.loaded) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div style = {style}>
        <Map
          google = {this.props.google}
          zoom = { 14 }>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDYDdcgbC_9LKXiiTpr_Ld8MLXPbJADvTc')
})(MapContainer)


