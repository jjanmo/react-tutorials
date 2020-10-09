import React from 'react';
import Square from './Square';

class Board extends React.Component {
	constructor() {
		super();
		this.board = [];
		this.createBoard();
	}

	createBoard() {
		for (let i = 0; i < 3; i++) {
			this.board.push([]);
			for (let j = 0; j < 3; j++) {
				this.board[i].push([]);
			}
		}
	}

	renderSquare(i, location) {
		return (
			<Square
				key={location}
				location={location}
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		return this.board.map((row, rIndex) => {
			return (
				<div key={rIndex} className="board-row">
					{row.map((col, cIndex) => this.renderSquare(3 * rIndex + cIndex, `${rIndex}/${cIndex}`))}
				</div>
			);
		});
	}
}

export default Board;
