import React from "react"
import ToCreatePage from "./pages/ToCreatePage/ToCreatePage"
import ToSeeDetailsPage from "./pages/ToSeeDetailsPage/ToSeeDetails"
import ToListenPage from "./pages/ToListenPage/ToListenPage"

export default class App extends React.Component {
  state = {
    actualPage: "criar"
  }

  switchPage = () => { 
    switch (this.state.actualPage) { 
    case "criar":
      return  <ToCreatePage goToDetailsPage={this.goToDetailsPage} />
    case "detalhes":
      return <ToSeeDetailsPage goToListenPage={this.goToListenPage} />
    case "escutar":
      return  <ToListenPage goToCreatePage={this.goToCreatePage} /> 
      default:
        return <div>Error! Page not found.</div>
     
  } }


  goToCreatePage = () => {
    this.setState({actualPage: "criar"})
  }

  goToDetailsPage = () => {
    this.setState({actualPage: "detalhes"})
  }

  goToListenPage= () => {
    this.setState({actualPage: "escutar"})
  }

  render() {
    return (
      <div>
        {this.switchPage()}
      </div>

    )
  }
}