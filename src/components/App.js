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
		currentPage: "Header",
		currentPageHeight: 0
	};

	pages = ["Header", "Projects", "PastWork", "Education", "Contact"];

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

	setCurrentPageHeight = height => {
		this.setState({ currentPageHeight: height });
	};

	setCurrentPage = () => {
		if (window.scrollY <= 557) {
			this.setState({ currentPage: "Header" });
		} else if (window.scrollY <= 1769) {
			this.setState({ currentPage: "Projects" });
		} else if (window.scrollY <= 2981) {
			this.setState({ currentPage: "PastWork" });
		}
	};

	handleScroll = event => {
		this.setCurrentPage();
	};

	render() {
		return (
			<div>
				<Header
					show={this.state.currentPage === "Header"}
					currentPageHeight={this.setCurrentPageHeight}
				/>
				<Projects
					projects={this.state.projects}
					show={this.state.currentPage === "Projects"}
					currentPageHeight={this.setCurrentPageHeight}
				/>
				<PastWork
					positions={this.state.positions}
					show={this.state.currentPage === "PastWork"}
					currentPageHeight={this.setCurrentPageHeight}
				/>
				<Education
					show={false}
					schools={this.state.schools}
					//show={this.state.currentPage === "Education"}
					currentPageHeight={this.setCurrentPageHeight}
				/>
				<Contact
					show={false}
					//show={this.state.currentPage === "Contact"}
				/>
			</div>
		);
	}
}

export default App;
