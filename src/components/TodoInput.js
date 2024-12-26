import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form className="todo-input__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新增待辦事項..."
        className="todo-input__input"
      />
      <Button type="submit" className="todo-input__button">
        新增
      </Button>
    </form>
  );
}
