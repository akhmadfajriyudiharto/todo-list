import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import './App.css';

function App() {
  const inputElement = React.createRef();
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ title: '', id: '' });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    .then(({data}) => {
      setItems(data)
      console.log(data)
    })
  }, []);

  function deleteItem(id) {
    const filteredItems = items.filter(item => {
      return item.id !== id
    })
    setItems(filteredItems)
  }
  function handleInput(e) {
    const itemtitle = e.target.value
    const currentItem = { title: itemtitle, id: Date.now() }
    setCurrentItem(currentItem)
  }

  function addItem(e) {
    e.preventDefault()
    const newItem = currentItem
    if (newItem.title !== '') {
      const itemtemp = [...items, newItem]
      setItems(itemtemp)
      setCurrentItem({ title: '', id: '' })
    }
  }

  return (
    <div className="App">
      <TodoList 
        addItem={addItem} 
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem} />
      <TodoItems 
        entries={items}  deleteItem={deleteItem} />
    </div>
  );
}

export default App;
