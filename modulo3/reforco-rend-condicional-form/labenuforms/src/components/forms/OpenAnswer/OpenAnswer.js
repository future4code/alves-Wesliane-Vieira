import React from 'react'

export default function OpenAnswer(props) {
    return (
        <div>
            <p> {props.pergunta} </p>
            <input 
                placeholder=''
                value={props.value}
                onChange={props.onChange}
            />
            
        </div>
    )
}
