import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Square 컴퍼넌트를 클래스 컴퍼넌트로 구성할 필요가 없다
//-> 함수 컴퍼넌트로 변경
// class Square extends React.Component { //제어되는 컴퍼넌트(controlled component)
//     // constructor(props) {
//     //     super(props);   //클래스 컴퍼넌트는 생성자를 가질 때, 항상 super(props)를 작성해야한다
//     //     this.state = {  //컴퍼넌트에 state 생성
//     //         value: null
//     //     }
//     // }
//     //=> Square는 게임상태를 유지할 필요가 없기때문에 state도 사실 필요없다

//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={
//                     () => this.props.onClick()
//                 }
//             /*
//             1. 버튼클릭
//             2. Board에서 props로 넘어온 onClick()호출
//             3. Board에 있는 onClick의 handleClick()호출

//             */
//             >
//                 {this.props.value}
//             </button >
//         );
//     }
// }

function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	//state를 Game 컨퍼넌트로 끌어올려서 사용할 것이기에
	//Board 컨퍼넌트에서는 생성자가 필요없게 되었다.

	// makeBoard() {
	//     let result = '';
	//     for (let i = 0; i < 3; i++) {
	//         result += <div className="board-row"></div>
	//         for (let j = 0; j < 3; j++) {
	//             result += this.renderSquare(3 * i + j)
	//         }
	//     }
	// }

	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
				//Board => Square로 함수를 props 전달
				//onClick props는 Square를 클릭하면 호출되는 함수
			/>
		);
	}

	render() {
		// let result = [];
		// for (let i = 0; i < 3; i++) {
		// 	<div className="board-row"></div>;
		// 	for (let j = 0; j < 3; j++) {
		// 		result += this.renderSquare(3 * i + j);
		// 	}
		// }
		// console.log(typeof result);
		// return null;
		return (
			// <div>

			// </div>
			// const result = [];
			// for(let i = 0; i < 3; i++){
			//     for(let j = 0; j < 3; j++){
			//         //3 * i + j

			//     }
			// }

			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{ squares: Array(9).fill(null) }], //배열 안에 객체(각 턴의 배열 상태 => 이 객체의 값이 배열)를 담은 것
			stepNumber: 0,
			xIsNext: true,
			currentButton: null,
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1); //처음부터 현재스텝까지만의 기록을 갖기위해서
		const current = history[history.length - 1]; // 현재상태의 보드 상태
		//참조끊고 새로운 배열 생성
		const squares = current.squares.slice();
		//console.log(squares); //squares.length => 항상 9
		//승자체크
		if (checkWinner(squares) || squares[i]) {
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
		const gameResult = checkWinner(current.squares);
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

function checkWinner(squares) {
	const winCandidateLines = [
		//가로
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		//세로
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		//대각선
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

ReactDOM.render(<Game />, document.getElementById('root'));
