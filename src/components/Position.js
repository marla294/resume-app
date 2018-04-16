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
		return <h1>position</h1>;
	}
}

export default Position;
