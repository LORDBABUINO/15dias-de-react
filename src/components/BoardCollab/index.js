import React from 'react'
import SquareCollab from '../SquareCollab';

const squareCollabs = qtd => {
	const squares = []

	while(qtd--){
		squares.push(<SquareCollab key={qtd}/>)
	}
	
	return squares
}

const BoardCollab = ({qtd}) => (
	<article>{squareCollabs(qtd)}</article>
)

export default BoardCollab;
