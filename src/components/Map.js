import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

class Map extends Component {
	render() {
		const SelfMap = withScriptjs(withGoogleMap((props) => 
			<GoogleMap
				defaultCenter = { { lat: 50.1293321, lng: 8.5852763 } }
				defaultZoom = { 14 }
				disableDefaultUI = { true }>
			</GoogleMap>
		))

		return (
			<div>
				<SelfMap
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYDdcgbC_9LKXiiTpr_Ld8MLXPbJADvTc"
					loadingElement={ <div style={{ height: '100%' }} /> }
					containerElement={ <div style={{ height: '100vh', width: '100vw'}} /> }
					mapElement={ <div style={{ height: '100%' }} /> }
				/>

			</div>
		)
	}
}

export default Map

