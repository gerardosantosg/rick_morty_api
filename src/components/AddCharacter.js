import { useState, useContext } from 'react';
import CharacterListContext from './CharacterListContext';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddCharacter = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const { addCharacter } = useContext(CharacterListContext);

    return (
        <div className='mt-5'>
            <h1>Add a Character</h1>
            <Form>
                <FloatingLabel
                    controlId='floatingInput'
                    label='ID'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='ID'
                        onChange={(e) => setId(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingInput'
                    label='Name'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </FloatingLabel>
                <Form.Select aria-label='Default select example' onChange={(e) => setStatus(e.target.value)}>
                    <option value=''>Choose a status</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='unknown'>unknown</option>
                </Form.Select>
                <Link to='/'>
                    <Button variant='secondary'>Cancel</Button>
                </Link>
                <Button className='m-3' onClick={() => addCharacter(id, name, status)}>Add Character</Button>
            </Form>
        </div>
    )
}

export default AddCharacter
