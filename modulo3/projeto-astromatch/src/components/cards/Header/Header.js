import Section from "./styles";
import {BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import React from 'react';
import Perfis from '../../../pages/Perfis/Perfis';
import Matches from '../../../pages/Matches/Matches';

function Header() {
    return(
      
        <Section background="cornflowerblue" > 
            <Router>
                <Routes>
                    <Route path='/' component={<Perfis />} />
                    <Route path='/Matches' component={<Matches />} />
                </Routes>
                <div >
                  <ul>
                    <li><Link to='/'>Ir para Perfis</Link></li>
                    <li><Link to='/Matches'>Ir para Matches</Link></li>
                  </ul>
                </div>              
                
            </Router>
        </Section>
      
    )
  }
   
  export default Header;