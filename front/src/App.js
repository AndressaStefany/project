import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import logo from './logo.svg'
import './App.css'
import Plot_heatmap from './components/Plot_heatmap'
import Plot_parcoords from "./components/Plot_parcoords";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Plot_parcoords/>

            </div>
        )
    }
}

export default App