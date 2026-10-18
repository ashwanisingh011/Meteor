// import { Counter } from "./Counter.jsx";
// import { Header } from "./Header.jsx";
// import { Info } from "./Info.jsx";
import React from 'react';
import { Task } from './Task.jsx';

const tasks = [
  {_id: 1, text: "First Task"},
  {_id: 2, text: "Second Task"},
  {_id: 3, text: "Third Task"}
]

export const App = () => (
  <div>
   <h1>Simple Todos</h1>

   <ul>
    {tasks.map((task) => <Task key={task._id} task={task} />)}
   </ul>
  </div>
);
