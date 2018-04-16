import React from "react";
import "../css/Project.css";

class Project extends React.Component {
	render() {
		const { image, name, url, start, uses } = this.props.project;
		return (
			<div className="boxshadow-container">
				<a href={url} target="_blank">
					<div className="project">
						<img src={image} alt={name} className="screenshot" />
						<h3>{name}</h3>
						<p>{uses}</p>
					</div>
				</a>
			</div>
		);
	}
}

export default Project;
