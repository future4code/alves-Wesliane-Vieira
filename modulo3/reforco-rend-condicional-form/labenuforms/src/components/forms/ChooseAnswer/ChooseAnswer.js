import React from 'react'

export default function ChooseAnswer(props) {
    return (
        <div>
            <p> {props.pergunta} </p>
            <select>
                {props.opcoes.map(opcao => (
                    <option value={opcao}> {opcao} </option>
                ))}
            </select>
            
        </div>
    )
}
