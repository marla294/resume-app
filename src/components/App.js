import React, { Component } from "react";
import Header from "./Header";
import Projects from "./Projects";
import projectdata from "../ProjectData";

class App extends React.Component {
	state = {
		projects: {}
	};

	loadProjects = () => {
		console.log("loadProjects");
		this.setState({ projects: projectdata });
	};

	render() {
		return (
			<div>
				{/*<Header />*/}
				<Projects
					projects={this.state.projects}
					loadProjects={this.loadProjects}
				/>
			</div>
		);
	}
}

export default App;
