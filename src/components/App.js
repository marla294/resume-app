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
		componentId: "Header"
	};

	componentDidMount() {
		this.loadProjects();
		this.loadPositions();
		this.loadSchools();
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

	position = 0;

	components = ["Header", "Projects", "PastWork", "Education", "Contact"];

	handleScroll = event => {
		let id;
		this.components.forEach((component, index) => {
			if (component === this.state.componentId) {
				id = index;
			}
		});

		if (window.scrollY > this.position) {
			id = (id + 1) % 5;
		} else if (window.scrollY < this.position) {
			id = (id - 1) % 5;
		}

		this.setState({ componentId: this.components[id] });

		this.position = window.scrollY;
	};

	render() {
		return (
			<Header show={true} />

			/*
			<div>
				<Header show={this.state.componentId === "Header"} />
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
		*/
		);
	}
}

export default App;
