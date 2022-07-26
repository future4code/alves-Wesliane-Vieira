import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Me from './img/Me.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Me} 
          nome="Wesliane Vieira" 
          descricao="Olá! Me chamo Wesliane, sou transplantada de medula óssea. Tenho 25 anos e, ainda, moro com meus pais. Adoro comer batata-frita e assistir um bom filme ou acompanhar uma série. Iniciei minha aventura na programação em outubro de 2021. E atualmente, sou estudante da Labenu."
        />
        
        <ImagemButton 
          imagem="https://www.iconninja.com/files/981/382/463/stroke-arrow-border-stroke-arrow-down-arrow-down-stroke-arrow-down-icon.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

          <CardPequeno 
            imagem="https://www.iconninja.com/files/474/96/40/email-icon.png"
            nome="Email: "
            descricao="weslianesilvavieira@gmail.com"
          />
          <CardPequeno
            imagem="https://www.iconninja.com/files/109/846/355/location-adress-position-gps-pin-icon.png"
            nome="Endereço: "
            descricao="Belo Horizonte - BH"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbWg0SjbYgiRbfmBrRuVCQMp8D1Oy5lcsRg0VucY1pTQVMzlTUCo15n1CUoq3dusu2sQ&usqp=CAU" 
          nome="Vendedora e Aprendiz em Ourivesaria" 
          descricao="Trabalho com prata e ouro. Fazendo conserto e frabricação de anéis, alianças, sólitarios, colares e pingentes." 
        />
        
        <CardGrande 
          imagem="https://storage.googleapis.com/adm-portal.appspot.com/noticias/_imgHighlight/artigo_101623.jpg?mtime=20181125151938&focal=none" 
          nome="Atendimento de Telemarketing" 
          descricao="Venda de planos de saúde." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
