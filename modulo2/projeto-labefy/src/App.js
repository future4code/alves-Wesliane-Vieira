import React from "react";
import ListPlayListPage from "./pages/ListPlaylistPage/ListPlaylistPage";
import CreatePlaylistPage from "./pages/CreatePlaylistPage/CreatePlaylistPage";
import DetailsPlaylistPage from "./pages/DetailsPlaylistPage/DetailsPlaylistPage";
import AddTracksPlaylistPage from "./pages/AddTracksPlaylistPage/AddTracksPlaylistPage";
import ListenTracksPlaylistPage from "./pages/ListenTracksPlaylistPage/ListenTracksPlaylistPage";
import { AppContainer } from "./styles";
import Header from "./components/cards/Header/Header";

export default class App extends React.Component {
  state = {
    actualPage: "criar"
  
  }

  switchPage = (actualPage) => {
    this.setState({actualPage: actualPage})
  }
  
  render() {
    const renderSwitchPage = () => {
      if(this.state.actualPage === "criar")
        return <CreatePlaylistPage /> 
      if(this.state.actualPage === "lista")
        return <ListPlayListPage />
      if(this.state.actualPage === "detalhes")
        return <DetailsPlaylistPage />
      if(this.state.actualPage === "adicionar")
        return <AddTracksPlaylistPage />
      if(this.state.actualPage === "escutar")
        return <ListenTracksPlaylistPage />
      else if(this.state.actualPage === "")
        return <div>Error! Page not found.</div>

    }

    return (
      <AppContainer>
        <Header switchPage={this.switchPage} />
        {renderSwitchPage()}
      </AppContainer>

    )
  }
}

