import { Meteor } from 'meteor/meteor';
import { Link, LinksCollection } from '/imports/api/links';
import { PostsCollection } from '/imports/api/post';

async function insertLink({ title, url }: Pick<Link, 'title' | 'url'>) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

async function insertPost(){
  await PostsCollection.insertAsync({
    title: "My First Meteor Post",
    content: "This is the content of my first post.",
    author: "Ashwani Singh",
    createdAt: new Date()
  });
}

Meteor.startup(async () => {

  if(await PostsCollection.find().countAsync() === 0){
    await insertPost();
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });

  Meteor.publish("posts", function() {
    return PostsCollection.find();
  })
});
