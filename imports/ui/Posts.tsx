import { useSubscribe, useFind } from "meteor/react-meteor-data/suspense";
import { PostsCollection } from "/imports/api/post";

export const Posts = () => {
  useSubscribe("posts");

  const posts = useFind(PostsCollection, []);

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{post.author}</small>
          </div>
        ))}
      </div>
    </>
  );
};
