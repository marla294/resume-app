import React from "react";
import "../css/Project.css";

class Project extends React.Component {
	render() {
		return (
			<div className="project column column-4">
				<p>{this.props.project.image}</p>
				<p>{this.props.project.name}</p>
				<p>{this.props.project.url}</p>
				<p>{this.props.project.start}</p>
				<p>{this.props.project.uses}</p>
			</div>
		);
	}
}

export default Project;
