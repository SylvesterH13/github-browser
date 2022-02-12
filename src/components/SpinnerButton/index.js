import './index.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerButton(props) {
    const { children, animation } = props;
    return (
        <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation={animation}
                size="sm"
                role="status"
                aria-hidden="true"
                className="LoadingButtonSpinner"
            />
            {children}
        </Button>        
    );
}

export default SpinnerButton;
