// import React, { useEffect } from 'react';
import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from "./context";
import AddTodo from "./Todo/AddTodo"
import Loader from "./Loader"
import {setSelectionRange} from "@testing-library/user-event/dist/utils";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState('Текст в Инпуте')
    


    return (
        <div className="App">
            <div className="post">
                <div className="post_content">
                    <strong>1. Javascript</strong>
                    <div className="">
                        Javascript – Язык Программирования
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>

            </div>
        </div>
    );

    }



export default App;

// TODO_APP
// function App() {
//     const [todos, setTodos] = React.useState([])
//     const [loading, setLoading] = React.useState(true)
//
//     useEffect(() =>{
//         fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//             .then(response => response.json())
//             .then(todos => {
//                 setTimeout(() => {
//                     setTodos(todos)
//                     setLoading(false)
//                 }, 2000)
//             })
//     }, [])
//
//     function toggleTodo(id) {
//         // console.log('todo id', id)
//         setTodos(
//             todos.map(todo => {
//             if (todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo
//             })
//         )
//     }
//
//     function removeTodo(id) {
//         setTodos(todos.filter(todo => todo.id !== id))
//     }
//
//
//     function addTodo(title) {
//         setTodos(
//             todos.concat([
//                 {
//                     title,
//                     id: Date.now(),
//                     completed: false
//                 }
//         ]))
//     }
//
//   return (
//       <Context.Provider value={{ removeTodo }}>
//           <div className='wrapper'>
//             <h1>React Tutorial</h1>
//               <AddTodo onCreate={addTodo} />
//
//               {loading && <Loader />}
//
//               {todos.length ? ( <TodoList todos={todos}  onToggle={toggleTodo} /> ) : ( loading ? null : <p>No todos</p> ) }
//
//           </div>
//       </Context.Provider>
//   );
// }
//
// export default App;
