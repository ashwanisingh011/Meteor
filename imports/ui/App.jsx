// import { Counter } from "./Counter.jsx";
// import { Header } from "./Header.jsx";
// import { Info } from "./Info.jsx";
import React from 'react';
import { Task } from './Task.jsx';
import { TaskCollection } from '../api/TaskCollection.js';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';

export const App = () => {
  const isLoading = useSubscribe("tasks");
  const tasks = useTracker(() => TaskCollection.find({}).fetch());

  if(isLoading()){
    return <div>Loading...</div>
  }
  return (
    <>
      <div>
        <ul>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </ul>
      </div>
    </>
  )
}
