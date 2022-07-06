import React from "react";
import axios from "axios"
import { PlaylistCardContainer, NameContainer, DeleteButton, PlaylistsContainer } from "./styles";
import { baseUrl, axiosConfig } from "../../constants/urls/urls";


class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    };

    deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };

    render () {
        const PlaylistCard = ((props) => {
            return  <PlaylistCardContainer>
                <NameContainer>
                    {props.name}
                </NameContainer>
                <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)} >
                        X
                </DeleteButton>
        </PlaylistCardContainer>
        })

        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard 
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })

        return (
            <PlaylistsContainer>
             
                {playlists}
    
            </PlaylistsContainer>
        )
    }
}



export default Playlists

