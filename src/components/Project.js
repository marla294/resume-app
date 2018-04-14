import React from "react";
import "../css/Project.css";

class Project extends React.Component {
	render() {
		const { image, name, url, start, uses } = this.props.project;
		return (
			<div className="project column column-4">
				<img src={image} alt={name} className="screenshot" />
				<h3>{name}</h3>
				<a href={url}>{url}</a>
				<p>{uses}</p>
			</div>
		);
	}
}

export default Project;
