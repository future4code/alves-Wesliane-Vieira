import React from 'react';
import ScreenRegister from './components/ScreenRegister';
import ScreenListUsers from './components/SreenListUsers';



export default class App extends React.Component {
  state = {
    actualScreen: "register"
  };

// Fazer telas trocarem 
  switchScreen = () => {
    switch (this.state.actualScreen) {
      case "register":
        return <ScreenRegister  goToRegister={this.goToRegister} />
      case "list":
        return <ScreenListUsers goToList={this.goToList} />
      default:
        return <div>Error! Page not found.</div>
    } 
  }

  // Eventos onClick que será passado como props
  goToRegister = () => {
    this.setState({actualScreen: "register"})
  }

  goToList = () => {
    this.setState({actualScreen: "list"})
  }

  

  render() {
    return (
      <div>
        {this.switchScreen()}
      </div>
    );
  }
}
