import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const { username } = useContext(AppContext);
  if (isError) {
    return <h1>Sorry! There was an error </h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <h1>
      This is the Home Page of user: {username}
      <p>{data?.fact}</p>
      <button onClick={refetch}> Update </button>
    </h1>
  );
};