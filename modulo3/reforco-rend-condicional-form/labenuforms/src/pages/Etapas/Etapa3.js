import React from 'react'
import ChooseAnswer from '../../components/forms/ChooseAnswer/ChooseAnswer'
import OpenAnswer from '../../components/forms/OpenAnswer/OpenAnswer'

export default function Etapa3() {
    return (
        <div>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <OpenAnswer 
                pergunta={"5. Por que você não terminou um curso de graduação?"}
            />
            <ChooseAnswer 
                pergunta={"6. Você fez algum curso complementar?"}
                opcoes={[
                    "Nenhum",
                    "Curso técnico", 
                    "Curso de inglês"
                ]}
            />


        </div>
    )
}
