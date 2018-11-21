import React, { Component } from 'react'
import './App.css'
import Map from './components/Map.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src={logo} className='App-logo' alt='Neighborhood Map' /> */}
					<h1 className='App-title'>Willkommen!</h1>
					<p className='App-intro'>Schön, dass Du vorbeischaust.
						Ich bin Philipp.</p>
				</header>
				<SideMenu/>
				<Map/>
			</div>
		)
	}
}

export default App
