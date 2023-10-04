import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";
export const Profile = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      {" "}
      Profile of {username}
      <ChangeProfile setUsername={setUsername} />
    </div>
  );
};
