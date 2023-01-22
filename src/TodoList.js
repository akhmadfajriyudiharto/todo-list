import React, { useEffect } from 'react';

function TodoList(props) {
  useEffect(() => {
    props.inputElement.current.focus()
  });
  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={props.addItem}>
          <input 
            placeholder="Task"
            ref={props.inputElement}
            value={props.currentItem.title}
            onChange={props.handleInput} 
          />
          <button type="submit"> Add Task </button>
        </form>
      </div>
    </div>
  );
}

export default TodoList;