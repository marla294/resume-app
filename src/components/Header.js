import React from "react";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		if (this.props.show) {
			this.props.currentPageHeight(this.myRef.current.offsetHeight);
		}
	}

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div
				className="header flex-container align-center"
				ref={this.myRef}
			>
				<div>
					<h1>Marla Foreman</h1>
					<h3>JavaScript Software Engineer from Omaha, NE</h3>
				</div>
			</div>
		);
	}
}

export default Header;
