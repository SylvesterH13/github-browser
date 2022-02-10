import ListGroup from 'react-bootstrap/ListGroup';

function RepoList (props) {
    return (
        <ListGroup>
            {props.repos.map(GetListItem)}
        </ListGroup>        
    );
}

function GetListItem (repo) {
    let createdAt = new Date(repo.created_at).toLocaleDateString();
    return (
        <ListGroup.Item action>
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{repo.name}</h5>
                <small>Stars: {repo.stargazers_count}</small>
            </div>
            <p class="mb-1">{repo.description}</p>
            <small>Created at {createdAt}</small>                    
        </ListGroup.Item>
    );
}

export default RepoList;