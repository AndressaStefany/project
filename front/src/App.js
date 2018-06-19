import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import logo from './logo.svg'
import './App.css'
import AppBar from './components/AppBar'
import CheckboxList from './components/CheckboxList'
import CSSGrid from './components/CSSGrid'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar/>
                <div className="App-content">
                    <CSSGrid/>
                </div>

            </div>
        )
    }
}

export default App