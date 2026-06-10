import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;