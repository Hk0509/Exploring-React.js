import { useGetCat } from "../components/useGetCat";

export const Home = () => {
  const { data, isLoading, refetchData, username } = useGetCat();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <h1>
      This is the Home Page of user: {username}
      <p>{data?.fact}</p>
      <button onClick={refetchData}> Update </button>
    </h1>
  );
};
