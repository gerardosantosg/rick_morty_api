import { useContext } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CharacterListContext from './CharacterListContext';
import DeleteModal from './DeleteModal';

const CharacterTable = () => {
    const { characters, deleteCharacter, show, handleShow, handleClose, charId } = useContext(CharacterListContext);


    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h1>Rick and Morty Characters</h1>
                    </Col>
                    <Col sm={4}>
                        <Link to='/add'>
                            <Button>Add a Character</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map(character => (
                        <tr key={character.id}>
                            <td>{character.id}</td>
                            <td>{character.name}</td>
                            <td>{character.status}</td>
                            <td>
                                <Link to={`/edit/${character.id}`}>
                                    <Button>Edit</Button>
                                </Link>
                            </td>
                            <td>
                                <Button variant='danger' onClick={() => handleShow(character.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <DeleteModal
                show={show}
                handleClose={handleClose}
                deleteCharacter={deleteCharacter}
                charId={charId}
            />
        </div>
    )
}

export default CharacterTable
