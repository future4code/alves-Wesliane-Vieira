import axios from "axios";
import React from "react";
import { baseUrl, axiosConfig } from "../../constants/urls/urls";
import { PlaylistCreationFormContainer, PlaylistCreationForm } from "../CreatePlaylistPage/styles";

class PlaylistCreationPage extends React.Component {
  state = {
    inputNameValue: ""
  }

  changeInputNameValue = (e) => {
    this.setState({ inputNameValue: e.target.value })
  }

  createPlaylist = (e) => {
    e.preventDefault()
    const body = {
        name: this.state.inputNameValue
    }

    axios.post(baseUrl, body, axiosConfig)
    .then(() => {
        alert('Playlist cadastrada com sucesso')
    })
    .catch(err => {
        alert('Playlist não cadastrada. Tente novamente.')
    })
    this.setState({inputNameValue: ""})
  }



    render() {
        return (
          <PlaylistCreationFormContainer>
            <h1>Cadastrar nova Playlist</h1>
            <PlaylistCreationForm onSubmit={this.createPlaylist} >
               <label>Escolha um nome com sua vibe!</label>
                    <input 
                       placeholder="Nome da Playlist"
                       type="text"
                       value={this.state.inputNameValue}
                       onChange={this.changeInputNameValue}
                     />
               <button type="submit">Cadastrar Playlist</button>
               <p>Espere pela mensagem confirmando o cadastro. Depois dele, troque de página.  </p>
           </PlaylistCreationForm>
          </PlaylistCreationFormContainer>
        )
  }
}
export default PlaylistCreationPage;

























































