import React from 'react'
import ChooseAnswer from '../../components/forms/ChooseAnswer/ChooseAnswer'
import OpenAnswer from '../../components/forms/OpenAnswer/OpenAnswer'

export default function Etapa1() {
    
    return (
        <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <OpenAnswer 
                pergunta={"1. Qual seu nome?"}
            />
            <OpenAnswer 
                pergunta={"2. Qual sua idade?"}
            />
            <OpenAnswer 
                pergunta={"3. Qual seu email?"}
            />
            <ChooseAnswer 
                pergunta={"Qual sua escolaridade?"}
                opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
            />
        </div>
    )
}
