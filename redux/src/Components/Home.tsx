import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return <div>This is Home Page {username}</div>;
};
