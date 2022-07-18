import styled from "styled-components"
import React from 'react'

const ProfileContainer = styled.div`
    margin: 16px;
    border: 1px solid black;
    max-height: 650px;
`
const ProfilePicture = styled.img`
    width: 100%;
    display: block;
`

const ProfileIntro = styled. div` 
    padding: 16px;
`

function PerfilCard = (props) => {
    return (
        <ProfileContainer>
            <ProfilePicture src={props.profile.photo} alt="Imagem da pessoa" /> 
            <ProfileIntro>
                <p>
                    {props.profile.name}, {props.profile.age}
                </p>
                <p>{props.profile.bio}</p>
            </ProfileIntro>
        </ProfileContainer> 
    )
}

export default PerfilCard;
