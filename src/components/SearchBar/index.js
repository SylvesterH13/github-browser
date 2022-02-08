import './index.css'
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar() {
    return (
        <Fragment>
            <Form.Control
                className="SearchInput"
                type="text"
                placeholder="Enter the Github nickname"
            >
            </Form.Control>
            <Button variant="primary" className='SearchBarButton'>Search</Button>
            <Button variant="success" className='SearchBarButton'>Clear</Button>
        </Fragment>
    );
}

export default SearchBar;