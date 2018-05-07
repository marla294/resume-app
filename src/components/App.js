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

	componentDidMount() {
		this.loadProjects();
		this.loadPositions();
		this.loadSchools();
		//window.scrollY = 0;
		window.addEventListener("scroll", this.handleScroll);
	}

	pages = ["Header", "Projects", "PastWork", "Education", "Contact"];

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

	setCurrentPage = component => {
		this.setState({ currentPage: component });
	};

	setNextPage = component => {
		let id = this.pages.findIndex(page => page === component);
		this.setCurrentPage(this.pages[id + 1]);
	};

	handleScroll = event => {
		this.movePage();
	};

	movePage() {
		if (
			this.state.currentPageHeight ===
			window.innerHeight + window.scrollY
		) {
			this.setNextPage(this.state.currentPage);
		}
	}

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
