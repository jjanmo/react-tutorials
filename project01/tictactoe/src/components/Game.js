import React from 'react';
import Board from './Board';
import TimeLine from './TimeLine';

class Game extends React.Component {
	constructor() {
		super();
		this.board = [];
		this.currentButton = null;
		this.state = {
			history: [{ squares: Array(9).fill(null) }],
			stepNumber: 0,
			xIsNext: true,
		};

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

	checkWinner(squares) {
		const winCandidateLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],

			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],

			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winCandidateLines.length; i++) {
			const [a, b, c] = winCandidateLines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a]; //O or X
			}
		}
		if (squares.every((ele) => ele)) {
			return 'DRAW';
		}

		return null;
	}

	handleClick(i) {
		console.log(this);
		const history = this.state.history.slice(0, this.state.stepNumber + 1); //처음부터 현재스텝까지만의 기록을 갖기위해서
		const current = history[history.length - 1]; // 현재상태의 보드 상태
		//참조끊고 새로운 배열 생성
		const squares = current.squares.slice();
		//console.log(squares); //squares.length => 항상 9
		//승자체크
		if (this.checkWinner(squares) || squares[i]) {
			//승자가 결정되거나 클릭된 곳을 누르면 클릭이벤트 무시
			return;
		}
		//데이터 업데이트
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		//상태변경
		this.setState({
			history: history.concat([{ squares }]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	}

	render() {
		// const history = this.state.history;
		// const current = history[this.state.stepNumber];
		// const gameResult = this.checkWinner(current.squares);
		// let status;
		// if (gameResult) {
		// 	status = gameResult === 'DRAW' ? gameResult : `WINNER : ${gameResult}`;
		// } else {
		// 	status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		// }

		// const moves = history.map((step, move) => {
		// 	const desc = move ? 'Go to move #' + move : 'Go to game start';
		// 	return (
		// 		<li key={move}>
		// 			<button
		// 				onClick={(e) => {
		// 					const { target } = e;
		// 					if (this.currentButton) this.currentButton.classList.remove('bold');
		// 					target.classList.add('bold');
		// 					this.currentButton = target;

		// 					this.jumpTo(move);
		// 				}}>
		// 				{desc}
		// 			</button>
		// 		</li>
		// 	);
		// });

		return (
			<div className="game">
				<div className="game-board">
					<Board board={this.board} squares={current.squares} onClick={(i) => this.handleClick(i)} />
				</div>
				<div className="game-info">
					{/* <div>{status}</div>
					<ol>{moves}</ol> */}
					<TimeLine />
				</div>
			</div>
		);
	}
}

export default Game;
