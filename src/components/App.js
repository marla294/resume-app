import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import PastWork from "./PastWork";
import data from "../project-data";
import positions from "../positions";

class App extends React.Component {
	state = {
		projects: {},
		positions: {}
	};

	componentDidMount() {
		this.loadProjects();
		this.loadPositions();
	}

	loadProjects = () => {
		this.setState({ projects: data });
	};

	loadPositions = () => {
		this.setState({ positions: positions });
	};

	render() {
		return (
			<div>
				{/*<Header />*/}
				{/*<Projects projects={this.state.projects} />*/}
				<PastWork positions={this.state.positions} />
			</div>
		);
	}
}

export default App;
