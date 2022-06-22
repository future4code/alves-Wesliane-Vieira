import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
    state = {
        nameUsers: "", 
    };

    getAllUsers = () => {
        axios 
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.user.nameUser}`
            )

    }

    const listOfUsers = []

    render() {
        return (
            <div clasName="App">
                <button>Trocar de tela</button>



            </div>
        )
    }

}