import styled from "styled-components";

// todo items

const TodoItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 12px 24px;
  font-size: 20px;
  transition: all 0.2s;
  margin-top: 5px;
  margin-botton: 10px;
  :hover {
    background-color: #d9c6a5;
  }
  + .list_item  {
    margin-top: 10px;
  }
  ${(props) =>
    props.isDone &&
    `text-decoration: 2px line-through;
    opacity: 50%;
    `
  }
`

const TodoItemCheckbox = styled.input`
  position: relative;
  display: inline-block;
  background: #f6f4e6;
  color: #776d8a 2px;
  width: 15px;
  height: 15px;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
  }
`
const TodoItemText = styled.label`
  display: inline-block;
  margin: 10px 0;
  margin-left: 20px;
  font-size: 16px;
`

const TodoItemDelete = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 16px;
  border: none;
  background-color:rgba(0, 0, 0, 0);
  ::after { 
    font-size: 15px;
    content: "X";
    color: #776d8a;
    text-align: center;
  }
  :hover { 
    opacity: 50%;
    cursor: pointer;
  }
  :focus {
    outline:none;
  }
`



export default function UseTodoItem(
  {
    todo,
    handleDeleteButton,
    handleCheckBox,
  }) {
  const handleCheckBoxClick = ()=>{
    handleCheckBox(todo.id)
  }
  const handleDeleteClick = () => {
    handleDeleteButton(todo.id)
  }
  return (
    <TodoItemWrapper id={todo.id} isDone={todo.isDone}>
      <TodoItemCheckbox type="checkbox" onChange={handleCheckBoxClick} checked={todo.isDone}></TodoItemCheckbox>
      <TodoItemText>{todo.content}</TodoItemText>
      <TodoItemDelete onClick={handleDeleteClick}></TodoItemDelete>
    </TodoItemWrapper>
  )
}
