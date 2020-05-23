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
    constructor(props) {
        super(props);
        this.state = { squares: Array(9).fill(null) };
    }

    handleClick(i) {
        //참조끊고 새로운 배열 생성 : 
        const squares = this.state.squares.slice();
        //데이터 업데이트
        squares[i] = 'X';
        //상태변경
        this.setState({ squares });
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        //Board => Square로 함수를 props 전달  
        //onClick props는 Square를 클릭하면 호출되는 함수
        />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
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
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
