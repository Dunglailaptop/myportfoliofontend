import React from 'react'
import Todo from './todo';

export default function TodoList({ todolist }) {
    return (
        <>
          {todolist.map(todo => (
            <Todo key={todo.id} todo={todo}></Todo>
         ))}
        </>
    );
      
}