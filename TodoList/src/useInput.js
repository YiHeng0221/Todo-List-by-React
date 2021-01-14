import { useState, useCallback, useMemo } from "react";
import useTodo from './useTodo';

export default function useInput() {
  const [ value, setValue ] = useState("")
  const { id, todos, setTodos } = useTodo()
  const [filter, setFilter] = useState("All");

  
  
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleEnterKeyPress = (e) => {
    if(e.key ==='Enter' && value){
      setTodos([
        {
          id: id.current,
          content: value,
          isDone: !'checked',
          // fuuu, it took me three days
        },
        ...todos,
      ]);
      e.target.value = ''
      // setValue does not work , why?
      id.current++
    }
  }

  const handleDeleteButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ))
  }

  const handleCheckBox = (id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id  !== id) return todo
        return {
          ...todo,
          isDone: !todo.isDone
        }
      })
    )
  }

  const handleClearTodo = () => {
    setTodos([]);
  }


  const updateFilter = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "All") return true;
      return filter === "Undone" ? !todo.isDone : todo.isDone;
    });
  }, [todos, filter]);
 
  
  return ({
      value, 
      setValue,
      id, 
      updateFilter,
      todos: filteredTodos,
      setTodos,
      handleInputChange,
      handleEnterKeyPress,
      handleDeleteButton,
      handleCheckBox,
      handleClearTodo,
    }
  )
}