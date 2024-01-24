import { useParams } from "react-router-dom";
import UserConatiner from "../containers/UserContainer";

const UserPage = () => {
  const { id } = useParams();
  return <UserConatiner id={id} />;
};

export default UserPage;
