import React from "react"
//import axios from "axios" 

export default class ToSeeDetailsPage extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.goToListenPage}>Escutar</button>
            
                <div>Detalhes , ver playlist </div>
            </div>

        )
    }
}