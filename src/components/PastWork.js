import React from "react";
import Position from "./Position";
import "../css/ParentComponent.css";

class PastWork extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", this.setHeightPastWork);
	}

	setHeightPastWork = () => {
		if (this.props.show) {
			this.props.currentPageHeight(this.myRef.current.scrollHeight);
		}
	};

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div ref={this.myRef}>
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
