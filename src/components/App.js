import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import PastWork from "./PastWork";
import Education from "./Education";
import data from "../project-data";
import positions from "../positions-data";
import schools from "../school-data";

class App extends React.Component {
	state = {
		projects: {},
		positions: {},
		schools: {}
	};

	componentDidMount() {
		this.loadProjects();
		this.loadPositions();
		this.loadSchools();
	}

	loadProjects = () => {
		this.setState({ projects: data });
	};

	loadPositions = () => {
		this.setState({ positions: positions });
	};

	loadSchools = () => {
		this.setState({ schools: schools });
	};

	render() {
		return (
			<div>
				{/*<Header />*/}
				{/*<Projects projects={this.state.projects} />*/}
				{/*<PastWork positions={this.state.positions} />*/}
				<Education schools={this.state.schools} />
			</div>
		);
	}
}

export default App;
