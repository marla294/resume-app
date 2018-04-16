import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import PastWork from "./PastWork";
import data from "../project-data";

class App extends React.Component {
	state = {
		projects: {}
	};

	componentDidMount() {
		this.loadProjects();
	}

	loadProjects = () => {
		this.setState({ projects: data });
	};

	render() {
		return (
			<div>
				{/*<Header />*/}
				{/*<Projects projects={this.state.projects} />*/}
				<PastWork />
			</div>
		);
	}
}

export default App;
