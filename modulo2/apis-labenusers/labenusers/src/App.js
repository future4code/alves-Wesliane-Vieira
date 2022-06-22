import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
  state = {
    users: [],
    error: "",
    nameUser: "",
    nameEmail: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios 
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Wesliane-SilvaVieira-Alves"
          }
        }
      )
      .then((response) => {
        this.setState({ users: response.data.result.list });
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
  };

  createUser = () => {
    const newUser = {
      name: this.state.nameUser,
      email: this.state.nameEmail
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        newUser,
        {
          headers: {
            Authorization:
            "Wesliane-SilvaVieira-Alves"
          }
        }
      )
      .then((response) => {
        console.log(response);
        response.status === 200 && alert("Usuário cadastrado!");
        this.getAllUsers();
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
  };

  newNameUser = (e) => {
    this.setState({
      nameUser: e.target.value
    });
  };
  
  newNameEmail = (e) => {
    this.setState({
      nameEmail: e.target.value
    });
  };
 

  render() {
    return (
      <div className='App'>
      <header>
        <button >Trocar de tela</button>
      </header>
      <main>
        <input  type="text" placeholder="Nome" 
          value= {this.state.nameUser} onChange= {this.newNameUser}
        />
        <input type="text" placeholder="E-mail" 
          value= {this.state.nameEmail} onChange= {this.newNameEmail}
        />
        <button 
          onClick={this.createUser}        
        >Criar Usuário
        </button>
        {this.state.error ? (
          <p> {this.state.error} </p> ) : (
            this.state.users.map(
              (user) => {
                return <getAllUsers key= {user.id} user={user} />;
              })
        )}
      </main>
      </div>
    );
  }
}
