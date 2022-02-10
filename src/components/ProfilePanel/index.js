import './index.css';
import Card from 'react-bootstrap/Card';

function ProfilePanel(props) {

    let { user } = props;
    let createdAtHumanReadable = new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric'});
    return (
        <Card className="ProfileCard">
            <Card.Header>Profile</Card.Header>
            <Card.Body>
                <img src={user.avatar_url} className="ProfileImage"></img>
                <h2><a href={user.html_url} target="_blank" className="ProfileLink">{user.login}</a></h2>
                <div className="ProfileCardDetails">
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Company:</b> {user.company}</p>
                    <p><b>Location:</b> {user.location}</p>
                    <p><b>On GitHub since:</b> {createdAtHumanReadable}</p>
                    <p><b>Followers:</b> {user.followers}</p>
                    <p><b>Following:</b> {user.following}</p>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProfilePanel;