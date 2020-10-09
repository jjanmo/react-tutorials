import React from 'react';
import Square from './Square';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.board = this.props.board;
	}

	renderSquare(i, location) {
		return (
			<Square
				key={i} //
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
