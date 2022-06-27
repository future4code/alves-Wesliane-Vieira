import React from "react"
//import axios from "axios" 

export default class ToListenPage extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.goToCreatePage}>Criar</button>
           
            <div>Escutar , escutar playlist </div>
            </div>
        )
    }
}