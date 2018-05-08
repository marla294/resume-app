import React from "react";
import Project from "./Project";
import "../css/ParentComponent.css";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener("scroll", this.setHeight);
	}

	setHeight = () => {
		if (this.props.show) {
			this.props.currentPageHeight(this.myRef.current.scrollHeight);
		}
	};

	render() {
		return this.props.show ? (
			<div className="component" ref={this.myRef}>
				<div className="head">
					<h1>Current Projects</h1>
					<h2>2017-2018</h2>
				</div>
				<div className="flex-container justify-center">
					{Object.keys(this.props.projects).map(key => (
						<Project key={key} project={this.props.projects[key]} />
					))}
				</div>
			</div>
		) : null;
	}
}

export default Projects;
