export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-list__item">
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="todo-list__checkbox"
            />
            <span
              className={`todo-list__text ${
                todo.completed ? "todo-list__text--completed" : ""
              }`}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="todo-list__delete">
            刪除
          </button>
        </li>
      ))}
    </ul>
  );
}
