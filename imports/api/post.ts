import {Mongo} from 'meteor/mongo';

export interface Post {
    _id?: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}

export const PostsCollection = new Mongo.Collection<Post>("posts");