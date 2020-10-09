import React from 'react';

function Square(props) {
	return (
		<button className="square" onClick={props.onClick} location={props.location}>
			{props.value}
		</button>
	);
}

export default Square;
