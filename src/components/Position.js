import React from "react";

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
			<div className="boxshadow-container">
				<a href={url} target="_blank">
					<div className="position">
						<img src={image} alt={name} className="company" />
						<h3>{name}</h3>
						<p>{loc}</p>
						<p>{desc}</p>
						<p>{title}</p>
						<p>
							{start} - {end}
						</p>
					</div>
				</a>
			</div>
		);
	}
}

export default Position;
