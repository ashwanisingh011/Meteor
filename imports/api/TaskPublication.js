import {Meteor} from 'meteor/meteor';
import {TaskCollection} from './TaskCollection.js';

Meteor.publish("tasks", () => {
    return TaskCollection.find();
});

