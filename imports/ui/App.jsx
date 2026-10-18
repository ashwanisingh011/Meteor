// import { Counter } from "./Counter.jsx";
// import { Header } from "./Header.jsx";
// import { Info } from "./Info.jsx";
import React from 'react';
import { Task } from './Task.jsx';
import { TaskCollection } from '../api/TaskCollection.js';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { TaskForm } from './TaskForm.jsx';

export const App = () => {
  const isLoading = useSubscribe("tasks");
  const tasks = useTracker(() => TaskCollection.find({}, {sort: {createdAt: -1}}).fetch());
  const handleToggleChecked = ({_id, isChecked}) => {
    Meteor.callAsync("tasks.toggleChecked", {_id, isChecked});
  }
  const handleDelete = ({_id}) => Meteor.callAsync("tasks.delete", {_id});

  if(isLoading()){
    return <div>Loading...</div>
  }
  return (
    <>
      <div>
        <TaskForm />
        <ul>
          {tasks.map((task) => (
            <Task key={task._id} task={task} onCheckboxClick={handleToggleChecked} onDeleteClick={handleDelete} />
          ))}
        </ul>
      </div>
    </>
  )
}
