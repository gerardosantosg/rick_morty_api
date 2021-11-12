import { Route, Routes } from 'react-router-dom';
import CharacterTable from './components/CharacterTable';
import EditCharacter from './components/EditCharacter';
import AddCharacter from './components/AddCharacter';
import { CharacterProvider } from './components/CharacterListContext';

const App = () => {
  return (
    <div className='container'>
      <CharacterProvider>
        <Routes>
          <Route path='/' element={<CharacterTable />}></Route>
          <Route path='/edit/:characterId' element={<EditCharacter />}></Route>
          <Route path='/add' element={<AddCharacter />}></Route>
        </Routes>
      </CharacterProvider>
    </div>
  );
}

export default App;
