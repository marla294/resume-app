import React from "react";
import Project from "./Project";
import "../css/ParentComponent.css";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		if (this.props.show) {
			this.myRef = React.createRef();
			//console.log(this.myRef);
			//this.props.currentPageHeight(this.myRef.current.offsetHeight);
		}
	}

	setHeight = () => {
		this.myRef = React.createRef();
		console.log(this.myRef);
	};

	render() {
		//this.myRef = React.createRef();
		console.log(this.myRef);
		if (!this.props.show) {
			return null;
		}
		if (this.props.show) {
			return (
				<div className="component" ref={this.myRef}>
					<div className="head">
						<h1>Current Projects</h1>
						<h2>2017-2018</h2>
					</div>
					<div className="flex-container justify-center">
						{Object.keys(this.props.projects).map(key => (
							<Project
								key={key}
								project={this.props.projects[key]}
							/>
						))}
					</div>
				</div>
			);
		}
	}
}

export default Projects;
