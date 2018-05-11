import React from "react";
import "../css/ParentComponent.css";

class Contact extends React.Component {
	render() {
		let className = "component hide";
		if (this.props.show) {
			className = "component show";
		} else {
			className = "component hide";
		}
		return (
			<div className={className}>
				<div className="head">
					<h1>Contact Me</h1>
				</div>
				<div>
					<br />
					<p>
						If you would like to get in touch, please send me a
						message on{" "}
						<a
							href="https://www.linkedin.com/in/marlaforeman/"
							style={{ textDecoration: "underline" }}
						>
							LinkedIn
						</a>
					</p>
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		);
	}
}

export default Contact;
