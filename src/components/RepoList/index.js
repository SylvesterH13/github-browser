import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function RepoList (props) {

    const [ activeRepoId, setActiveRepoId ] = useState();

    function GetListItem (repo) {
        let createdAt = new Date(repo.created_at).toLocaleDateString('pt-BR');
        return (
            <ListGroup.Item
                action key={repo.id}
                active={repo.id == activeRepoId}
                onClick={() => setActiveRepoId(repo.id)}
                href={repo.html_url}
                target="_blank"
            >
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{repo.name}</h5>
                    <small>Stars: {repo.stargazers_count}</small>
                </div>
                <p className="mb-1">{repo.description}</p>
                <small>Created at {createdAt}</small>                    
            </ListGroup.Item>
        );
    }    

    return (
        <ListGroup>
            {props.repos.map(GetListItem)}
        </ListGroup>        
    );
}

export default RepoList;