import type { Todo } from "@/types/todos";

export const loadTodos = (): Todo[] => {
    if(typeof window === 'undefined') return [];
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored): [];
};

export const saveTodos = (todos: Todo []) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}