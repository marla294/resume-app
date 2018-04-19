import React from "react";
import Project from "./Project";
import "../css/PastWork.css";

class Projects extends React.Component {
	render() {
		return (
			<div>
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
