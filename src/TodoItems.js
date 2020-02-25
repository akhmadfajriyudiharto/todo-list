import React from 'react';

function TodoItems(props) {
  const todoEntries = props.entries
  const listItems = todoEntries.map(createTasks)

  function createTasks(item) {
    return (
      <li id={item.id} onClick={() => props.deleteItem(item.id)}>
        {item.title}
      </li>
    )
  }
  return (
    <ul className="theList">{listItems}</ul>
  )
}

export default TodoItems;