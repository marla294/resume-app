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
			url,
			jobdesc
		} = this.props.position;
		return (
			<a href={url} target="_blank">
				<div className="boxshadow-container">
					<div className="position">
						<div className="image flex-container align-center">
							<img src={image} alt={name} />
						</div>
						<div className="flex-container align-center justify-center">
							<div className="info">
								<div className="company">
									<h2>{name}</h2>
									<h3>{loc}</h3>
									<p>
										<i>{desc}</i>
									</p>
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
				</div>
			</a>
		);
	}
}

export default Position;
