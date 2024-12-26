import { useState } from "react";
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";
import Accordion from "@/components/Accordion";
// import Chat from "@/components/Chat";
import Calendar from "@/components/Calendar";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="home__container">
          <div>
            <h1 className="home__title">待辦事項清單</h1>
            <TodoInput onAdd={addTodo} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>
          <Calendar />
        </div>

        <section className="accordions">
          <h2 className="accordions__title">Accordion</h2>
          <Accordion />
        </section>
        {/* <section>
          <Chat />
        </section> */}
      </div>
    </>
  );
}
