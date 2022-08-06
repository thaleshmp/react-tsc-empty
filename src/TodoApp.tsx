import React from 'react';

export default function TodoApp(props: any) {
  const [todos, setTodos] = React.useState<string[]>([])
  const [currentTodo, setCurrentTodo] = React.useState('')

  const addTodo = () => {
    setTodos([...todos, currentTodo]);
    setCurrentTodo('')
  }

  const removeTodo = (todo: string) => {
    setTodos(todos.filter(x => x !== todo));
  }

  return (
    <>
      <input value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)} />
      <button onClick={() => { addTodo() }}>Add</button>
      <ul>
        {todos.map((item, idx) => <li key={idx}><a onClick={() => removeTodo(item)}>{item}</a></li>)}
      </ul>
    </>
  )
}