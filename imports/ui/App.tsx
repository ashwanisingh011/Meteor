import { Hello } from './Hello';
import { Info } from './Info';
import {Meteor} from 'meteor/meteor';
import { Posts } from './Posts';

export const App = () => {
  Meteor.subscribe('links');
  return (
    <div className="max-w-3xl min-h-screen mx-auto sm:pt-10">
      <Hello/>
      <Info/>
      <Posts />
    </div>
  )
};
