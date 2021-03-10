import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.components';
import { useEffect, useState } from 'react';

const App = () => { 
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => {
      console.log(err);
    })
  },[])

  const filteredUsers = users.filter((monster => monster.name.toLowerCase().includes(search)));

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />
      <CardList monsters={filteredUsers} />
    </div>
  );
}

export default App;
