import './index.css'
import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar(props) {

    const [ searchValue, setSearchValue ] = useState('');
    const { onClick } = props;

    function clearSearch() {
        setSearchValue('');
        onClick('');
    }

    return (
        <Fragment>
            <Form.Control
                className="SearchInput"
                type="text"
                placeholder="Enter the Github nickname"
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
            >
            </Form.Control>
            <Button variant="primary" className='SearchBarButton' onClick={() => onClick(searchValue)}>Search</Button>
            <Button variant="success" className='SearchBarButton' onClick={clearSearch}>Clear</Button>
        </Fragment>
    );
}

export default SearchBar;