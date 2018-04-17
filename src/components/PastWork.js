import React from "react";
import Position from "./Position";
import "../css/PastWork.css";

class PastWork extends React.Component {
	render() {
		return (
			<div>
				<div className="head">
					<h1>Work Experience</h1>
					<h2>2005-2017</h2>
				</div>
				{Object.keys(this.props.positions).map(key => (
					<Position key={key} position={this.props.positions[key]} />
				))}
			</div>
		);
	}
}

export default PastWork;
