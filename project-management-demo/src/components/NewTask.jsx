import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [input, setInput] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleAdd() {
    onAdd(input);
    setInput("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-2 rounded-md bg-stone-200"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button
        className="text-stone-700 hover:text-stone-900"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
}
