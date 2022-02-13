import './index.css';
import '../../common/style.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import RepoList from '../RepoList';

const REPOS_NAV_BAR_KEY = "repos";
const STARRED_NAV_BAR_KEY = "starred";
const DEFAULT_NAV_BAR = REPOS_NAV_BAR_KEY;

function ReposPanel(props) {

    const { repos, starred } = props;
    const [navBarKey, setNavBarKey] = useState(DEFAULT_NAV_BAR);

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

    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" fill="true" activeKey={navBarKey} onSelect={(eventKey) => setNavBarKey(eventKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey={REPOS_NAV_BAR_KEY}>Repos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={STARRED_NAV_BAR_KEY}>Starred</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body className="CardBody">
                <RepoList repos={GetRepos(navBarKey)}></RepoList>
            </Card.Body>
        </Card>
    );
}

export default ReposPanel;