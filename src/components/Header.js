import React from "react";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	render() {
		let className = "header flex-container align-center hide";
		if (this.props.show) {
			className = "header flex-container align-center show";
		} else {
			className = "header flex-container align-center hide";
		}
		return (
			<div className={className} ref={this.myRef}>
				<div>
					<h1>Marla Foreman</h1>
					<h3>JavaScript Software Engineer from Omaha, NE</h3>
				</div>
			</div>
		);
	}
}

export default Header;
