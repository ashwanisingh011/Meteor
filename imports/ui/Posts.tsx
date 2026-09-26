import { useSubscribe } from 'meteor/react-meteor-data/suspense';

export const Posts = () => {
    useSubscribe("posts");

    return <div>Posts are Subscribed</div>
}