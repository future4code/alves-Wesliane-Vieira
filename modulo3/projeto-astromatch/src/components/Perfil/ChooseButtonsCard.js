import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

function ChooseButtonsCard = (props) => {
  return (
    <ButtonsContainer>
      <button onClick={props.onClickNo}>Não</button>
      <button onClick={props.onClickYes}>Sim</button>
    </ButtonsContainer>
  );
}

export default ChooseButtonsCard;