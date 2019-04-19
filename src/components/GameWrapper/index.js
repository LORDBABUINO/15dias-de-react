import React, { Component } from 'react'

import BoardCollab from '../BoardCollab';
import NextPlayer from '../NextPlayer';

import './styles.css'

class GameWrapper extends Component {
	state = {player: '', level: 10}

	handleClick = () => {
		this.setState({player: this.state.player === 'X'? 'O': 'X'})
	}

	state = {player: 'X'}

	render() {
		return (
			<main className="game-wrapper">
				<NextPlayer player={this.state.player} /> 
				<BoardCollab onClick={this.handleClick} />
			</main>
		)
	}
}

export default GameWrapper
