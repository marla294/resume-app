import React from "react";
import "../css/Position.css";

class Position extends React.Component {
	render() {
		const {
			image,
			name,
			desc,
			loc,
			title,
			start,
			end,
			url
		} = this.props.position;
		return (
			<a href={url} target="_blank">
				<div className="position">
					<img src={image} alt={name} className="company" />
					<div className="flex-container align-center">
						<div className="info">
							<h3>
								{name} * {loc}
							</h3>
							<p>{desc}</p>
							<p>{title}</p>
							<p>
								{start} - {end}
							</p>
						</div>
					</div>
				</div>
			</a>
		);
	}
}

export default Position;
