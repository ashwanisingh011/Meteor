import { useFind, useSubscribe } from "meteor/react-meteor-data/suspense";
import { LinksCollection } from "../api/links";

export const Info = () => {
  useSubscribe("links");
  const data = useFind(LinksCollection, []);

  return (
    <>
      <h1>Links</h1>
    </>
  );
};
