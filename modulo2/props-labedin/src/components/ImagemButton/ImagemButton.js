import React from 'react';
import styled from 'styled-components';

const ImageButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

    img {
    width: 30px;
    margin-right: 10px;
    }
`;

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <img src={ props.imagem } alt=""/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;