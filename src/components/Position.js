import React from "react";
import "../css/Component.css";

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
			url,
			jobdesc
		} = this.props.position;
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
									<p>{desc}</p>
								</div>
								<div className="my-title">
									<h2>{title}</h2>
									<h3>
										{start} - {end}
									</h3>
									<p>{jobdesc}</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default Position;
