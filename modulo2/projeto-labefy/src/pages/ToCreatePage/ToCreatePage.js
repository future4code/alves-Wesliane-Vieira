import React from "react"
import axios from "axios"
// Não consigo importar 
import { CardPlaylist } from "./src/pages/ToCreatePages/styles"

export default class ToCreatePage extends React.Component {
    state = {
        name: "",
        listPlaylist: []
        
    }
// Renderização ao abrir a pág
    componentDidMount() {
       this.createPlaylist()
    }
    
// Requisição deu error 400
// Endpoint post
    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        } ).then((response) => {
            alert("Playlist criada!")
            this.setState({nome: ""})
        })
        .catch((error) => {
            alert(error.response.data)
            
        })
    }

    //Serve para pegar os dados assim que a tela abrir 
    componentDidMount() {
        this.getAllPlaylists()
    }

    // Endpoint get
    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios.get(url, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        })
        .then((res => {
            console.log(res)
        }))
        .catch((err) => {
            alert("Ops! Ocorreu um erro. Tente novamente.")
        })
    }

    // Input Controlado. Passar value e onChange, relacionado-os ao state
    newPlaylist = (event) => {
        this.setState({name: event.target.value})
    }
    // Botão
    doRegister = () => {
        console.log(this.state.name)
    }
    // Endpoint delete
    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        })
        .then((res) => {
           alert("Playlist deletada com sucesso!")
           this.getAllPlaylists()
        })
        .catch((erro) => {
            alert("Ops! Ocorreu um erro. Tente novamente.")
            
        })
    }

    render() {
        const listOfPlaylists = this.state.listPlaylist.map((playlist) => { 
        
        return (
            <div>
                <button onClick={this.props.goToDetailsPage}>Details</button>
                
                <h1>LABEFY - Crie e personalize sua playlist do jeitinho que desejar.</h1>
                
                <h3>Crie sua playlist:</h3>
                <input placeholder="Nome" value={this.state.name} onChange={this.newPlaylist} />
                <button onClick={this.doRegister}>Criar</button>
                
                <h3>Lista de Playlist:</h3> 
                <CardPlaylist key={playlist.id}>
                    {playlist.name}                  
                <button noClick={(id) => this.deletePlaylist(playlist.id)}>X</button>
                </CardPlaylist>
            </div>
        )
    })
    }
}