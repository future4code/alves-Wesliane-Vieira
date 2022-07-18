import React, { useState, useEffect } from "react";
import axios from "axios";
import PerfilCard from "./components/Perfil/PerfilCard"
import ChooseButtonsCard from "./components/Perfil/ChooseButtonsCard"


const Perfil = () => {
    const  [chooseProfile, setChooseProfile] = useState(undefined)

    const GetProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
            .then((res) => {
                console.log(res.data.profile)
                setChooseProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err);
            })

    const choosePerson = (choice) => {
        const body = {
            id: chooseProfile.id,
            choice: choice
        }
        setChooseProfile(undefined)
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body)
            .then((res) => {
                console.log(res.data);
                GetProfileToChoose()
            })
            .catch((err) => {
                console.log(err);
            })
    }
            
        useEffect (() => {
            GetProfileToChoose()
        }, [])

        const onClickNo = () => {
            chooseProfile(false)
        }

        const onClickYes = () => {
            chooseProfile(true)
        }
    }
 
 
    return (
        <div> 
            {chooseProfile ? (
               <>  <PerfilCard profile={chooseProfile} />
               <ChooseButtonsCard onClickNo={onClickNo} onClickYes={onClickYes} />
               </>
            ) : (
                <p> Carregando...</p>
            )}
        </div>
    );
    };
    
export default Perfil;