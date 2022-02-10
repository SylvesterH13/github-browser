import './App.css';
import SearchBar from './components/SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePanel from './components/ProfilePanel';
import ReposPanel from './components/ReposPanel';
import UserApi from './api/UserApi';
import { Component, useState } from 'react';

class App extends Component {

	constructor(props) {
		super(props);
		this.initialState = {
			user: null,
			repos: null,
			starred: null
		}
		this.searchUserAsync = this.searchUserAsync.bind(this);
		this.state = this.initialState;
	}

	async searchUserAsync(value) {

		let user = await UserApi.getUserAsync(value);
		if (user == null) {
			this.setState(this.initialState);
			return;
		}

		let [ repos, starred ] = await Promise.all([
			UserApi.getReposAsync(user.login),
			UserApi.getStarredAsync(user.login)
		])
		this.setState({ user, repos, starred });
	}

	render() {
		return (
			<Container className='App'>
				<Row className='AppRow'>
					<Col>
						<h1 className="AppHeader">Github Browser</h1>
						<SearchBar onClick={this.searchUserAsync}></SearchBar>
					</Col>
				</Row>
				{this.state.user &&
					<Row className='AppRow InfoRow'>
						<Col>
							<ProfilePanel user={this.state.user}></ProfilePanel>
						</Col>
						<Col>
							<ReposPanel repos={this.state.repos} starred={this.state.starred}></ReposPanel>
						</Col>
					</Row>
				}
			</Container>
		);
	}
}

export default App;
