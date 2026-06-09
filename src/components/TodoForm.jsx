import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim()) return;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            <button>Add</button>
        </form>
    )
}

export default TodoForm;