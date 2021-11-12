import { useLocation } from 'react-router';
import { useState, useContext } from 'react';
import CharacterListContext from './CharacterListContext';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EditCharacter = () => {
    const location = useLocation();
    const characterId = location.pathname.split('/')[2];
    const [status, setStatus] = useState('');
    const { editCharacter } = useContext(CharacterListContext);


    return (
        <div className='mt-5'>
            <h1>Edit Status of Character {characterId}</h1>
            <Form.Select aria-label='Default select example' onChange={(e) => setStatus(e.target.value)}>
                <option value=''>Choose a new status</option>
                <option value='Alive'>Alive</option>
                <option value='Dead'>Dead</option>
                <option value='unknown'>unknown</option>
            </Form.Select>
            <Link to='/'>
                <Button variant='secondary'>Cancel</Button>
            </Link>
            <Button className='m-3' onClick={() => editCharacter(characterId, status)}>Save</Button>
        </div>
    )
}

export default EditCharacter
