import { useContext, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import { AppContext } from '../globalvalues/AppContext'
import { UserContext } from '../globalvalues/UserContext'
import { TodoContext } from '../globalvalues/TodoContext'

function Home() {
  //const [count, setCount] = useState(0)
  const { user, setUser } = useContext(UserContext);
  const { count, setCount } = useContext(AppContext);
  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const [addText, setAddText] = useState("");
  const handlecount = (count) => {
    setCount((count) => count + 1);

    localStorage.setItem('count', count);

  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="/counter" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{user.role} + {user.name} </h1>
      <div className="card">
        <button onClick={() => handlecount(count)}>
          count is {count}
        </button>
        <button
          className="mt-2 px-3 py-2 bg-blue-600 text-white rounded"
          onClick={() => setUser({ ...user, name: "Mike" })}
        >
          Change Name
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
<input
  value={addText}
  onChange={(e) => setAddText(e.target.value)}
/>
      <button
        className="mt-2 px-3 py-2 bg-blue-600 text-white rounded"
        onClick={() => addTodo(addText)}
      >
        Add Name
      </button>
      <ul>
        {todos.length > 0 && todos.map(todo => (
          <li key={todo.id}>{todo.text} <button
            className="mt-2 px-3 py-2 bg-blue-600 text-white rounded"
            onClick={() => removeTodo(todo.id)}
          >
           Remove Name
          </button></li> // Always give key
        ))}
      </ul>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
