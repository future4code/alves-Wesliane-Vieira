import axios from "axios"
import React from "react"


export default class ToSeeDetailsPage extends React.Component {
    
    
    
    render() {
        return (
            <div>
                <button onClick={this.props.goToListenPage}>Escutar</button>
                
            </div>

        )
    }
}