import React from "react";
import School from "./School";

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", this.setHeightEducation);
	}

	setHeightEducation = () => {
		if (this.props.show) {
			this.props.currentPageHeight(this.myRef.current.scrollHeight);
		}
	};

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="component" ref={this.myRef}>
				<div className="head">
					<h1>Education</h1>
					<h2>2000-2005</h2>
				</div>
				<div className="flex-container justify-center">
					{Object.keys(this.props.schools).map(key => (
						<School key={key} school={this.props.schools[key]} />
					))}
				</div>
			</div>
		);
	}
}

export default Education;
