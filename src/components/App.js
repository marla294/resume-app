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
		currentPage: "Header"
	};

	pages = ["Header", "Projects", "PastWork", "Education", "Contact"];

	componentDidMount() {
		this.loadProjects();
		this.loadPositions();
		this.loadSchools();
		window.addEventListener("scroll", this.setCurrentPage);
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

	setCurrentPage = () => {
		if (window.scrollY <= 557) {
			this.setState({ currentPage: "Header" });
		} else if (window.scrollY <= 1769) {
			this.setState({ currentPage: "Projects" });
		} else if (window.scrollY <= 2981) {
			this.setState({ currentPage: "PastWork" });
		} else if (window.scrollY <= 3281) {
			this.setState({ currentPage: "Education" });
		} else {
			this.setState({ currentPage: "Contact" });
		}
	};

	render() {
		return (
			<div>
				<Header show={this.state.currentPage === "Header"} />
				<Projects
					projects={this.state.projects}
					show={this.state.currentPage === "Projects"}
				/>
				<PastWork
					positions={this.state.positions}
					show={this.state.currentPage === "PastWork"}
				/>
				<Education
					schools={this.state.schools}
					show={this.state.currentPage === "Education"}
				/>
				<Contact show={this.state.currentPage === "Contact"} />
			</div>
		);
	}
}

export default App;
