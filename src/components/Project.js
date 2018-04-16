import React from "react";
import "../css/Project.css";

class Project extends React.Component {
	render() {
		const { image, name, desc, url, start, uses } = this.props.project;
		return (
			<div className="boxshadow-container">
				<a href={url} target="_blank">
					<div className="project">
						<div className="flex-container justify-center">
							<img
								src={image}
								alt={name}
								className="screenshot"
							/>
						</div>
						<h3>{name}</h3>
						<p>{desc}</p>
						<p>{uses}</p>
					</div>
				</a>
			</div>
		);
	}
}

export default Project;
