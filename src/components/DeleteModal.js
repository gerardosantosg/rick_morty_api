import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ show, handleClose, deleteCharacter, charId }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Character Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this character?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteCharacter(charId)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
