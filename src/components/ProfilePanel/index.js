import './index.css';
import Card from 'react-bootstrap/Card';

function ProfilePanel(props) {

    let createdAtHumanReadable = new Date(props.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric'});
    return (
        <Card className="ProfileCard">
            <Card.Header>Profile</Card.Header>
            <Card.Body>
                <img src={props.avatarUrl} className="ProfileImage"></img>
                <h2><a href={props.htmlUrl} target="_blank" className="ProfileLink">{props.username}</a></h2>
                <div className="ProfileCardDetails">
                    <p><b>Name:</b> {props.name}</p>
                    <p><b>Company:</b> {props.company}</p>
                    <p><b>Location:</b> {props.location}</p>
                    <p><b>On GitHub since:</b> {createdAtHumanReadable}</p>
                    <p><b>Followers:</b> {props.followers}</p>
                    <p><b>Following:</b> {props.following}</p>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProfilePanel;