import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
      <Map
        item
        xs = { 12 }
        google = {this.props.google}
        style = {style}
        zoom = {14} >

        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {<h1>{this.state.selectedPlace.name}</h1>}
            </div>
        </InfoWindow> */}
      <Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYDdcgbC_9LKXiiTpr_Ld8MLXPbJADvTc'
})(MapContainer)