import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			history: [{ squares: Array(9).fill(null) }],
			stepNumber: 0,
			xIsNext: true,
			currentButton: null,
		};
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
			//draw
			return 'DRAW';
		}
		return null;
	}

	handleClick(i) {
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
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const gameResult = this.checkWinner(current.squares);
		let status;
		if (gameResult) {
			status = gameResult === 'DRAW' ? gameResult : `WINNER : ${gameResult}`;
		} else {
			status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		}

		const moves = history.map((step, move) => {
			const desc = move ? 'Go to move #' + move : 'Go to game start';
			return (
				<li key={move}>
					<button
						onClick={(e) => {
							if (this.currentButton) this.currentButton.classList.remove('bold');
							e.target.classList.add('bold');
							this.currentButton = e.target;

							this.jumpTo(move);
						}}>
						{desc}
					</button>
				</li>
			);
		});

		return (
			<div className="game">
				<div className="game-board">
					<Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
