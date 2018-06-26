import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import './App.css'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PersistentDrawer from './components/PersistentDrawer'

const Root = () => (
    <MuiThemeProvider >
        <HashRouter>
            <PersistentDrawer />
        </HashRouter>
    </MuiThemeProvider>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);

registerServiceWorker();
