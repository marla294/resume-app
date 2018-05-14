import React from "react";
import Position from "./Position";
import "../css/ParentComponent.css";

class PastWork extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	render() {
		let className = "component hide";
		if (this.props.show) {
			className = "component show";
		} else {
			className = "component hide";
		}
		return (
			<div className={className} ref={this.myRef}>
				<div className="head">
					<h1>Work Experience</h1>
					<h2>2005-2017</h2>
				</div>
				<div className="flex-container justify-center">
					{Object.keys(this.props.positions).map(key => (
						<Position
							key={key}
							position={this.props.positions[key]}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default PastWork;
