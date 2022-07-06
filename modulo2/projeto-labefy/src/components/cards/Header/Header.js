import React from "react";
import { HeaderContainer, ButtonsContainer } from "./styles";


const Header = (props) => {
            return ( 

                <HeaderContainer>
                    <h1>Labefy</h1>
                    <ButtonsContainer>
                        <button onClick={( ) => props.switchPage("criar")}>Cadastrar Playlist</button>
                        <button onClick={() => props.switchPage("lista")} >Lista de Playlists</button>
                        <button onClick={() => props.switchPage("detalhes")} >Músicas da Playlist</button>
                        <button onClick={() => props.switchPage("adicionar")} >Adicionar músicas</button>
                        <button onClick={() => props.switchPage("escutar")} >Escutar músicas</button>

                    </ButtonsContainer>

                </HeaderContainer>
            )
}

export default Header; 