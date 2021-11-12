import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router';

export const CharacterListContext = createContext();

export const CharacterProvider = ({ children }) => {
    const LOCAL_STORAGE_KEY = 'rick_and_morty_characters';
    const navigate = useNavigate();

    // Get Characters
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const storedCharacters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedCharacters) {
            setCharacters(storedCharacters);
        } else {
            fetchCharacters();
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(characters));
    }, [characters]);


    const fetchCharacters = async () => {
        const dataReceived = await fetch('https://rickandmortyapi.com/api/character');
        const result = await dataReceived.json();
        const charactersFetched = result.results;
        setCharacters(charactersFetched);
    }

    // Delete Character with Modal
    const [show, setShow] = useState(false);
    const [charId, setCharId] = useState(null);
    const handleClose = () => setShow(false);

    const handleShow = (id) => {
        setShow(true);
        setCharId(id);
    }

    const deleteCharacter = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
        setShow(false);
    }

    // Edit Status of a Character
    const editCharacter = (id, newStatus) => {
        if (!newStatus) {
            alert('Please select an option');
            return;
        } else {
            setCharacters(characters.map(character => character.id === +id ?
                { ...character, status: newStatus } : character))
            navigate('/');
        }

    }

    // Add a new Character
    const addCharacter = (id, name, status) => {
        if (!id || !name || !status) {
            alert('Please fill all fields');
            return;
        } else {
            setCharacters([...characters, { id, name, status }]);
            navigate('/');
        }

    }

    return (
        <CharacterListContext.Provider value={{ characters, deleteCharacter, show, handleShow, handleClose, charId, editCharacter, addCharacter }}>
            {children}
        </CharacterListContext.Provider>
    )
}

export default CharacterListContext
