import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../css/Header.css";

class Header extends React.Component {
	HeaderContent = <h1>Content</h1>;
	FullContent = "";

	componentDidMount() {
		this.HeaderContent = <h1>Hi</h1>;
		this.render();
	}

	render() {
		const transitionOptions = {
			classNames: "content",
			timeout: { enter: 5000 }
		};

		return (
			<div className="header">
				<div className="align-center">
					<div>
						<h1>Marla Foreman</h1>
						<h3>JavaScript Software Engineer from Omaha, NE</h3>
						<h3>Making cool websites with Angular and React</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
