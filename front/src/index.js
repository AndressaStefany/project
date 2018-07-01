import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PersistentDrawer from './components/PersistentDrawer'
import PlotParcoords from "./components/PlotParcoords";

const Root = () => (
    <MuiThemeProvider >
        <HashRouter>
            <PersistentDrawer />
            {/*<PlotParcoords/>*/}
        </HashRouter>
    </MuiThemeProvider>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);

registerServiceWorker();
