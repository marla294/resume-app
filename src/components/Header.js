import React from "react";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = event => {
		this.movePage();
	};

	movePage() {
		if (
			this.myRef.current.offsetHeight ===
			window.innerHeight + window.scrollY
		) {
			this.props.setComponentId("Projects");
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
