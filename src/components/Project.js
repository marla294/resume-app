import React from "react";
//import "../css/Project.css";
import "../css/Position.css";

class Project extends React.Component {
	getTechImage(tech) {
		switch (tech) {
			case "Angular":
				return "/images/tech/angular-favicon.jpg";
				break;
			case "Bootstrap":
				return "/images/tech/bootstrap-favicon.jpg";
				break;
			case "React":
				return "/images/tech/react-favicon.jpg";
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
					<div className="position">
						<div className="image flex-container justify-center">
							<img src={image} alt={name} />
						</div>
						<div className="flex-container align-center justify-center">
							<div className="info">
								<div className="company">
									<h2>{name}</h2>
									<h3>{start}</h3>
								</div>
								<div className="my-title">
									{uses.map(tech => {
										return (
											<img
												key={tech}
												className="favicon"
												src={this.getTechImage(tech)}
												alt={tech}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default Project;
