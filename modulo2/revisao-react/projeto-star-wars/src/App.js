import React from 'react'
import AllPeoplePage from './pages/AllPeoplePage/AllPeoplePage'
import DescriptionPersonPage from './pages/DescriptionPersonPage/DescriptionPersonPage'

export default class App extends React.Component {
  
  state = {
    actualPage: "allPeople"
    
  }

  switchPage = () => {
    switch (this.state.actualPage) {
     case "allPeople":
       return <AllPeoplePage goToDescriptionPerson={this.goToDescriptionPerson} />
     case "descriptionPerson":
       return <DescriptionPersonPage goToAllPeople={this.goToAllPeople}/>
     default:
       return <div>Error! Page not found.</div>
  } }
  
  goToAllPeople = () => {
    this.setState({actualPage: "allPeople"})
  }

  goToDescriptionPerson = () => {
    this.setState({actualPage: "descriptionPerson"})
  }
  render() {
  return (
    <div>
      {this.switchPage()}
    </div>
  )}
}


