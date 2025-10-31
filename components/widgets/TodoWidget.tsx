"use client";

import { useState } from "react";
import { Widget } from "../Widget";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTodos } from "@/hooks/useTodo";

export function TodoWidget() {
  const { todos, addTodo, toggleTodo } = useTodos();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <Widget title="Todo List">
      <form action="" onSubmit={handleSubmit} className="mb-3 flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo..."
          className="text-sm"
        />
        <Button type="submit" size="sm">
          Add
        </Button>
      </form>

      <ul className="space-y-1" suppressHydrationWarning>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              placeholder="Todo"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-4 w-4"
            />
            <span
              className={
                todo.completed ? "line-through text-muted-foreground" : ""
              }
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted-foreground">
        {activeCount} {activeCount === 1 ? "task" : " 'tasks"} left
      </p>
    </Widget>
  );
}
