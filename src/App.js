import './App.css';
import { useState } from 'react';

const title = 'React'

function App() {
  return (
    <div>
      <Greet />
      <Search />
      <List list = {[1,2,3,4,5]} />
      <List list = {['How','are','you','doing ?']} />
    </div>
  );
}

//Greet component
function Greet(){
  console.log('rendering greet')
  return (
      <div>
        Hello {title}!
      </div>
    );
}


//arrow sytax component
const List = (props) =>{
  console.log('rendering List')
  return (
    <div>
      {props.list.map(val => {
        return <span>{val}</span>
      })}
    </div>
  );
}

//Search component
const Search = () =>{

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  console.log('rendering search')

  return (
    <div>
      <label htmlFor='search'>Search</label>
      <br />
      <input id ='search' onChange={handleChange} type="text" />
      <br />
      <i>You are searching for : {searchTerm}</i>
    </div>
  );
}

export default App;
