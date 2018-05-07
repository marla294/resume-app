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
		schools: {},
		componentId: "Header",
		currentPageHeight: 0
	};

	componentDidMount() {
		this.loadProjects();
		this.loadPositions();
		this.loadSchools();
		//window.scrollY = 0;
		window.addEventListener("scroll", this.handleScroll);
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

	setCurrentPageHeight = height => {
		this.setState({ currentPageHeight: height });
	};

	setComponentId = component => {
		this.setState({ componentId: component });
	};

	handleScroll = event => {
		this.movePage();
	};

	movePage() {
		if (
			this.state.currentPageHeight ===
			window.innerHeight + window.scrollY
		) {
			this.setComponentId("Projects");
		}
	}

	render() {
		return (
			<div>
				<Header
					show={this.state.componentId === "Header"}
					currentPageHeight={this.setCurrentPageHeight}
				/>
				<Projects
					projects={this.state.projects}
					show={this.state.componentId === "Projects"}
				/>
				<PastWork
					positions={this.state.positions}
					show={this.state.componentId === "PastWork"}
				/>
				<Education
					schools={this.state.schools}
					show={this.state.componentId === "Education"}
				/>
				<Contact show={this.state.componentId === "Contact"} />
			</div>
		);
	}
}

export default App;
