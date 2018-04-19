import React from "react";
import "../css/Position.css";

class School extends React.Component {
	render() {
		const {
			image,
			name,
			major,
			minor,
			loc,
			gpa,
			grad,
			url
		} = this.props.school;
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
									<h3>{loc}</h3>
								</div>
								<div className="my-title">
									<h2>BS {major}</h2>
									<h3>Minor in {minor}</h3>
									<p>Graduated {grad}</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default School;
