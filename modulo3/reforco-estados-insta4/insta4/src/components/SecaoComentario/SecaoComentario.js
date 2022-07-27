import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario (props) {
	const [comentando, setComentando] = useState("");

	
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={comentando}
				onChange={(e) => setComentando(e.target.value)}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
}

