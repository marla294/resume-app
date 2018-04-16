import React from "react";
import "../css/Project.css";

class Project extends React.Component {
	getTechImage(tech) {
		switch (tech) {
			case "Angular":
				return "/images/tech/angular-favicon.jpg";
				break;
			case "Bootstrap":
				return "/images/tech/bootstrap-favicon.jpg";
				break;
			case "JavaScript":
				return "/images/tech/javascript-favicon.jpg";
				break;
			case "TypeScript":
				return "/images/tech/typescript-favicon.jpg";
				break;
			default:
				return "/images/tech/angular-favicon.jpg";
		}
	}

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
						<p className="desc">{desc}</p>
						{uses.map(tech => {
							/*console.log(this.getTechImage(tech));*/
							return (
								<img
									className="favicon"
									src={this.getTechImage(tech)}
									alt={tech}
								/>
							);
						})}
					</div>
				</a>
			</div>
		);
	}
}

export default Project;
