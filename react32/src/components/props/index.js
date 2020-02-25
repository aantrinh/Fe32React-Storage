import React, { Component } from 'react'
import Classprops from './classprops'
import FunctionProps from './functionProps'


export default class Props extends Component {
    name ="HoaiAn"
    render() {
        return (
            <div>
                <h3 className="tittle"></h3>
                <Classprops name={this.name}/>
                <Classprops name="ABC"/>
                <FunctionProps userName={this.name}/>
                
            </div>
        )
    }
}
