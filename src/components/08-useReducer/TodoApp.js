import React, { useReducer, useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { todoReducer } from './todoReducer';
import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
  // return [{
  //     id: new Date().getTime(),
  //     desc: 'Learn React',
  //     done: false
  // }]
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };
  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
