import React, { useState } from "react";
import Matches from "../../pages/Matches";
import Perfil from "../../pages/Perfil";
import { BoxHeader } from "./HeaderStyles";
;


const Header = () => {
const [switchPage, setSwitchPage] = useState('perfil')

const renderSwitchPage = () => {
  switch (switchPage) {
    case 'profile':
      return <Perfil />
    case 'matches':
      return <Matches />
    default:
      return <Perfil />
  }
}

const goToPerfil = () => {
  setSwitchPage('perfil')
}

const goToMatches = () => {
  setSwitchPage('matches')
}


    return ( 
        <>
          <BoxHeader>
            {renderSwitchPage()}
            <button onClick={goToPerfil}>Selecionar Perfis</button>
            <button onClick={goToMatches}>Ver Matches </button>
          </BoxHeader>
        </>
    )
}

export default Header;