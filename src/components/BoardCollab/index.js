import React from 'react'
import SquareCollab from '../SquareCollab';

import './styles.css'

const createSquares = () => {
	const squares = Array(9).fill()/**/
	return squares.map(() => <SquareCollab />)
}

const squareCollabs = qtd => {
	const squares = []

	while(qtd--){
		squares.push(<SquareCollab key={qtd}/>)
	}
	
	return squares
}

const BoardCollab = ({qtd}) => (
	<article className="board-collab">{createSquares()}</article>
)

export default BoardCollab;
