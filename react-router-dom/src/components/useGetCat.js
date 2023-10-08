//Abstraction using custom hooks

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useContext } from "react";
import { AppContext } from "../App";

export const useGetCat = () => {
  const { data, isLoading, error, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const { username } = useContext(AppContext);
  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };
  return { data, isLoading, refetchData, username };
};
