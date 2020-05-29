import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import './App.css';

import { setSearchField, requestRobots } from '../redux/actions.js';

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().startsWith(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>LOADING</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
				<Footer />
			</div>
		);
	};
};

const mapStateToProps = (state) => ({
	searchField: state.searchRobots.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
