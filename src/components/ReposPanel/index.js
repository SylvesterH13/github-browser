import './index.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import RepoList from '../RepoList';
import repos from './mockedRepos';
import starred from './mockedStarred';

const REPOS_NAV_BAR_KEY = "repos";
const STARRED_NAV_BAR_KEY = "starred";
const DEFAULT_NAV_BAR = REPOS_NAV_BAR_KEY;

function GetRepos(navBarKey) {

    if (navBarKey == REPOS_NAV_BAR_KEY) {
        return repos;
    }
    
    if (navBarKey == STARRED_NAV_BAR_KEY) {
        return starred.map(s =>
        {
            s.name = s.full_name;
            return s;
        });
    }
}

function ReposPanel() {

    const [navBarKey, setNavBarKey] = useState(DEFAULT_NAV_BAR);

    return (
        <Card className="ReposCard">
            <Card.Header>
                <Nav variant="tabs" fill="true" activeKey={navBarKey} onSelect={(eventKey) => setNavBarKey(eventKey)}>
                    <Nav.Item>
                        <Nav.Link  eventKey={REPOS_NAV_BAR_KEY}>Repos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey={STARRED_NAV_BAR_KEY}>Starred</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <RepoList repos={GetRepos(navBarKey)}></RepoList>
            </Card.Body>
        </Card>
    );
}

export default ReposPanel;