import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 500px;
    img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }
    h4 {
    margin-bottom: 15px;
    }
    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }
`;

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem } alt="" />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno;