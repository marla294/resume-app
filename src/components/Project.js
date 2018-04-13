import React from "react";
import "../css/Project.css";

class Project extends React.Component {
	render() {
		return (
			<div className="project column column-4">
				<p>Image</p>
				<p>Title</p>
				<p>URL</p>
				<p>Start Date</p>
				<p>Uses</p>
			</div>
		);
	}
}

export default Project;
