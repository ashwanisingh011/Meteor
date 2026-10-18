import { Meteor } from "meteor/meteor";
import { TaskCollection } from "../imports/api/TaskCollection";
import "../imports/api/TaskPublication";

const insertTask = (taskText) => {
  TaskCollection.insertAsync({ text: taskText });
};

Meteor.startup(async () => {
  if((await TaskCollection.find().countAsync()) === 0){
    [
      "This is the first task",
      "This is the second task",
      "This is the third task",
      "This is the fourth task"
    ].forEach(insertTask);
  }
})