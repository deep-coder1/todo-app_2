import {useState} from "react"
import TodoForm from "./components/TodoForm.jsx"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      {/* <p>Welcome to my React app.</p> */}
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App