import React from "react";
import Position from "./Position";

class PastWork extends React.Component {
	render() {
		return (
			<div>
				<h1>Work Experience (2005-2017)</h1>
				{Object.keys(this.props.positions).map(key => (
					<Position key={key} position={this.props.positions[key]} />
				))}
			</div>
		);
	}
}

export default PastWork;
