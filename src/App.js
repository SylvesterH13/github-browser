import './App.css';
import SearchBar from './components/SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePanel from './components/ProfilePanel';
import ReposPanel from './components/ReposPanel';

function GetUser() {
	return {
		username: "SylvesterH13",
		name: "Sylvester Henrique",
		company: "Take Blip",
		location: "Divinópolis, Brazil",
		createdAt: "2016-06-16T17:38:51Z",
		avatarUrl: "https://avatars.githubusercontent.com/u/19980165?v=4",
		followers: 9,
		following: 15,
		htmlUrl: "https://github.com/SylvesterH13"
	}
}

function App() {
  return (
	<Container className='App'>
		<Row className='AppRow'>
			<Col>
				<h1 className="AppHeader">Github Browser</h1>
				<SearchBar></SearchBar>
			</Col>
		</Row>
		<Row className='AppRow InfoRow'>
			<Col>
				<ProfilePanel {...GetUser()}></ProfilePanel>
			</Col>
			<Col>
				<ReposPanel></ReposPanel>
			</Col>
		</Row>
	</Container>
  );
}

export default App;
