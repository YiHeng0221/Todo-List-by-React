import { useState, useEffect, useRef } from "react";

function setTodoToLocal(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

export default function useTodo() {
  const id = useRef(1); 
  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem("todos");
    if (todoData) {
      todoData = JSON.parse(todoData);
      if (todoData[0] !== undefined) {
        id.current = todoData[0].id + 1;
      }
    } else {
      todoData = [];
    }
   return todoData
  });

  useEffect(() => {
    setTodoToLocal(todos);
  }, [todos]); 

  return {
    id,
    todos,
    setTodos,
  };
}
