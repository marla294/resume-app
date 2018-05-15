import React from "react";
import "../css/ParentComponent.css";

class Contact extends React.Component {
	render() {
		let className = "contact flex-container align-center hide";
		if (this.props.show) {
			className = "contact flex-container align-center show";
		} else {
			className = "contact flex-container align-center hide";
		}
		return (
			<div className={className}>
				<div>
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
			</div>
		);
	}
}

export default Contact;
