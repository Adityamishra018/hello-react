import './App.css';
import { useState } from 'react';

const title = 'React'

function App() {

  const [searchText,setSearchText] = useState('');
  const items = ['Apple','Mango','Pomegrante','Banana','Grapes']

  const handleSearch = (e)=>{
    setSearchText(e.target.value)
  }

  const result = items.filter(i => i.toLowerCase().includes(searchText.toLowerCase())) 

  return (
    <div>
      <Greet />
      List of Items : <List list = {items} />
      <Search Text={searchText} onSearch={handleSearch} />
      Result set : <List list = {result} />
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
    <>
      {props.list.map(val => {
        return <span> {val} </span>
      })}
    </>
  );
}

//Search component
const Search = (props) =>{

  console.log('rendering search')

  return (
    <div>
      <label htmlFor='search'>Search</label>
      <input id ='search' value={props.Text} onChange={props.onSearch} type="text" />
      <br />
      <i>You are searching for : {props.Text}</i>
    </div>
  );
}

export default App;
