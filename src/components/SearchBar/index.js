import './index.css'
import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SpinnerButton from '../SpinnerButton';

const ENTER_KEY = 'Enter';

function SearchBar(props) {

    const initialState = {
        searchValue: '',
        searching: false
    };
    const [ { searchValue, searching }, setState ] = useState(initialState);
    const { onClick } = props;

    async function clearSearch() {
        setState(initialState);
        await onClick('');
    }

    async function onKeyDown(event) {
        if(!event.target.value){
            return;
        }
        if (event.key == ENTER_KEY) {
            setState( { searching: true } );
            document.activeElement.blur(); 
            await onClick(searchValue);
            setState(initialState);
        }
    }

    function handleChange(event) {
        setState({ searchValue: event.target.value });
    }

    async function search(event) {
        if(!event.target.value){
            return;
        }
        setState( { searching: true } );
        await onClick(searchValue);
        setState(initialState);
    }

    return (
        <div className="SearchBar">
            <FloatingLabel
                controlId="searchBarInput"
                label="Enter the Github nickname"
                className="mb-4"
            >
                <Form.Control
                    type="text"
                    placeholder="some GitHub nickname"
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    value={searchValue}
                >
                </Form.Control>
            </FloatingLabel>
            {searching && <SpinnerButton animation="grow">Loading...</SpinnerButton>}
            {!searching &&
                <Button variant="primary" className='SearchBarButton' onClick={search}>Search</Button>
            }
            <Button variant="success" className='SearchBarButton' onClick={clearSearch}>Clear</Button>
        </div>
    );
}

export default SearchBar;