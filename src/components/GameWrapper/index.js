import React, { Component } from 'react'

import BoardCollab from '../BoardCollab';
import NextPlayer from '../NextPlayer';
import HistoryCollab from '../HistoryCollab';

import './styles.css'

class GameWrapper extends Component {

	state = {
		player: 'X',
		squares: Array(9).fill('')
	}

	handleClick = index => {
		const {player} = this.state
		const squares = Array.from(this.state.squares)
		
		squares[index] || (squares[index] = player)

		this.setState({
			player: this.state.squares[index] !== '' && player === 'X'? 'O': 'X',
			squares
		})
	}

	render() {
		const {player, squares} = this.state

		return (
			<main className="game-wrapper">
				<NextPlayer player={player} /> 
				<BoardCollab squares={squares} onClick={this.handleClick} />
				<HistoryCollab />
			</main>
		)
	}
}

export default GameWrapper
