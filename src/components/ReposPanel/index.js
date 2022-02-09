import './index.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import repos from './mockedRepos';
import starred from './mockedStarred';

function GetContent(navBarKey) {

    let listItems;
    if (navBarKey == "repos") {
        listItems = GetListItems(repos, false);
    }
    if (navBarKey == "starred") {
        listItems = GetListItems(starred, true);
    }
    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    );
}

function GetListItems(repos, showFullName) {
    return repos.map(r => {
        let createdAt = new Date(r.created_at).toLocaleDateString();
        return (
            <ListGroup.Item action>
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{showFullName ? r.full_name : r.name}</h5>
                    <small>Stars: {r.stargazers_count}</small>
                </div>
                <p class="mb-1">{r.description}</p>
                <small>Created at {createdAt}</small>                    
            </ListGroup.Item>
        );
    });
}

function ReposPanel(props) {

    const [navBarKey, setNavBarKey] = useState("repos");

    return (
        <Card className="ReposCard">
            <Card.Header>
                <Nav variant="tabs" fill="true" activeKey={navBarKey} onSelect={(eventKey) => setNavBarKey(eventKey)}>
                    <Nav.Item>
                        <Nav.Link  eventKey="repos">Repos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey="starred">Starred</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {GetContent(navBarKey)}
            </Card.Body>
        </Card>
    );
}

export default ReposPanel;