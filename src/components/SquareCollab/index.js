import React, { Component } from 'react'
import './styles.css'


class SquareCollab extends Component {

	constructor(props) {
		super(props)
		this.state = {
			content: 'X'
		}
	}

	handleClick = () => {
		if(this.state.content === 'X')
			this.setState({content: 'O'})
		else
			this.setState({content: 'X'})
	}

	render() {
		return (
			<button
				onClick={this.handleClick}
				className="square-collab"
			>
				{this.state.content}
			</button>
		)
	}
}

//const SquareCollab = () => (
//	<button
//		onClick={handleClick}
//		className="square-collab"
//	>X</button>
//)

export default SquareCollab
