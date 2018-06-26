import React, {Component} from 'react'
import PlotViolin from './PlotViolin'

class MediasView extends Component {
    render(){
        return(
            <div className="App-center">
                <PlotViolin disciplina="PRÉ-CÁLCULO"/>
            </div>
        )
    }
}

export default MediasView;