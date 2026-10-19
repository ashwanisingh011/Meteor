// import { Counter } from "./Counter.jsx";
// import { Header } from "./Header.jsx";
// import { Info } from "./Info.jsx";
import React, {useState} from 'react';
import { Task } from './Task.jsx';
import { TaskCollection } from '../api/TaskCollection.js';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { TaskForm } from './TaskForm.jsx';

export const App = () => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const isLoading = useSubscribe("tasks");
  const hideCompletedFilter = {isChecked: {$ne: true}};
  const tasks = useTracker(() => TaskCollection.find(hideCompleted ? hideCompletedFilter : {}, {sort: {createdAt: -1}}).fetch());
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
        <div className="filter">
          <button onClick={() => setHideCompleted(!hideCompleted)}>{hideCompleted ? 'Show All' : 'Hide Completed'}</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <Task key={task._id} task={task} onCheckboxClick={handleToggleChecked} onDeleteClick={handleDelete} />
          ))}
        </ul>
      </div>
    </>
  )
}
