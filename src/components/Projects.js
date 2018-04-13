import React from "react";
import Project from "./Project";

class Projects extends React.Component {
	render() {
		return (
			<div>
				<h1>Current Projects (2017-2018)</h1>
				<div className="row">
					<Project />
				</div>
			</div>
		);
	}
}

export default Projects;
