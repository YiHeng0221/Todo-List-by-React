import { useState } from "react";
import todos from 'useTodo'

export default function updateFilter() {
  const [ filter, setFilter]=useState("All")
  const handleFilterMapping = (e) => {
    setFilter(e)
    if(filter === 'All') {
      return(
        todos.map((todo)=>(
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteButton={handleDeleteButton}
            handleCheckBox={handleCheckBox}
          />          
        ))
      )=
    } else if(filter === 'Done') {
      return(
        todos.map((todo)=>(
          <TodoItem
            key={todo.id}
            todo={todo}
            isDone={'checked'}
            handleDeleteButton={handleDeleteButton}
            handleCheckBox={handleCheckBox}
          />          
        ))
      )
    } else {
      return(
        todos.map((todo)=>(
          <TodoItem
            key={todo.id}
            todo={todo}
            isDone={!'checked'}
            handleDeleteButton={handleDeleteButton}
            handleCheckBox={handleCheckBox}
          />          
        ))
      )
    }
  }
  return {
    updateFilter,
    handleFilterMapping,
    filter, 
    setFilter
  }
}