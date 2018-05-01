import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import PastWork from "./PastWork";
import Education from "./Education";
import Contact from "./Contact";
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

	componentId = "Header";

	render() {
		return (
			<div>
				<Header show={this.componentId === "Header"} />
				<Projects
					projects={this.state.projects}
					show={this.componentId === "Projects"}
				/>
				<PastWork
					positions={this.state.positions}
					show={this.componentId === "PastWork"}
				/>
				<Education
					schools={this.state.schools}
					show={this.componentId === "Education"}
				/>
				<Contact show={this.componentId === "Contact"} />
			</div>
		);
	}
}

export default App;
