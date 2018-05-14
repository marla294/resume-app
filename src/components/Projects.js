import React from "react";
import Project from "./Project";
import "../css/ParentComponent.css";

class Projects extends React.Component {
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
					<h1>Current Projects</h1>
					<h2>2017-2018</h2>
				</div>
				<div className="flex-container justify-center">
					{Object.keys(this.props.projects).map(key => (
						<Project key={key} project={this.props.projects[key]} />
					))}
				</div>
			</div>
		);
	}
}

export default Projects;
