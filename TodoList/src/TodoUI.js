import styled from "styled-components";
import { Button, ButtonGroup } from 'react-bootstrap';
import useInput  from './useInput';
import TodoItem from './TodoItem'

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 645px;
  background: #f6f4e6;
  margin: 10% auto;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 10px;
  color: #776d8a;
  border-radius: 3%;
`
const Todolist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
`
const TodoItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
`
// todo headers
const TodoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
`
const TodoTitleNails = styled.div`
  margin: 10px;
  width:20px;
  height:20px;
  border: #dbe3e5 solid;
  border-radius: 100%;
  background-color: #dbe3e5;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
`
const TodoInput = styled.input`
  display: block;
  margin-top: 30px;
  margin-bottom: 35px;
  align-self: center;
  text-align: center;
  padding: 10px 10px;
  width: 100%;
  opacity: 100%;
  background: #f6f4e6;
  color: #776d8a;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  outline: none;
  font-size: 20px;
  :hover {
    background: #e8ded2;
    opacity: 50%;
  }
  :focus {
    opacity: 100%;
    color: #776d8a;
    background: #e8ded2;
  }
  ::placeholder {
    color: #776d8a;
    opacity: 50%;
  }
`

export default function TodoUI() {
    const {
      todos,
      handleInputChange,
      handleEnterKeyPress,
      handleClearTodo,
      updateFilter,
      handleDeleteButton,
      handleCheckBox
    } = useInput()


  return (
    <TodoWrapper>
      <Todolist>
        <TodoTitle>
          <TodoTitleNails />
          Todolist
          <TodoTitleNails />
        </TodoTitle>
        <TodoInput type="text" placeholder="add something todo here!" onChange={handleInputChange} onKeyPress={handleEnterKeyPress} />
        <ButtonGroup>
          <Button variant="outline-secondary" onClick={()=>updateFilter("All")}>All</Button>
          <Button variant="outline-secondary" onClick={()=>updateFilter("Done")}>Done</Button>
          <Button variant="outline-secondary" onClick={()=>updateFilter("Undone")}>Undone</Button>
          {/* 
              想問一下老師在 example 中有傳 $isActive={filter === "all"} 的原因是？我用了之後 DevTool 一直報錯，
              雖然可以動，但是移除了也不影響。
              Warning: 
              React does not recognize the `$isActive` prop on a DOM element. 
              If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `$isactive` instead. 
              If you accidentally passed it from a parent component, remove it from the DOM element.
              照著他說的使用 lowercase
              Warning: Received `false` for a non-boolean attribute `$isactive`.
              If you want to write it to the DOM, pass a string instead: $isactive="false" or $isactive={value.toString()}.
              If you used to conditionally omit it with $isactive={condition && value}, pass $isactive={condition ? value : undefined} instead.
          */}
          <Button variant="outline-danger" onClick={handleClearTodo}>Clear All</Button>
        </ButtonGroup>
        <TodoItems>
          {
            todos.map((todo)=>(
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDeleteButton={handleDeleteButton}
                handleCheckBox={handleCheckBox}
              />          
            ))
          }
        </TodoItems>
      </Todolist>
    </TodoWrapper>
  )
}