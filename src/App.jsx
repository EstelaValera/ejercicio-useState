import './App.css';
import { useState } from 'react';

const App = () => {
    const [name, setName] = useState('Sofía'); 
    const [newName, setNewName] = useState(''); 

    const changeName = (e) => {
        e.preventDefault(); 

        if (newName.trim()) {
        setName(newName); 
        setNewName('');   
    }
};

    return (
        <div>
            {}
            <h2>Teacher Name: {name}</h2>
        
            {}
            <form onSubmit={changeName}>
            <input
            type="text"
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            placeholder="add a name"
            />
            <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default App;