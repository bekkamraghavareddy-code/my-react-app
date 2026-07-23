import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) =>{

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
    const removeTodo = (id) =>{
        
        setTodos(todos.filter(t => t.id !== id));
    }


    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
}
