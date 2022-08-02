import React from 'react'
import OpenAnswer from '../../components/forms/OpenAnswer/OpenAnswer'

export default function Etapa2() {
    return (
        <div>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <OpenAnswer 
                pergunta={"5. Qual curso?"}
            />
            <OpenAnswer 
                pergunta={"6. Qual a unidade de ensino?"}
            />                        
        </div>
    )
}

