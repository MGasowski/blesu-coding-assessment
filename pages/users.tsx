import { UserCard } from "../components/UserCard";
import { useFetch } from "../hooks/useFetch";
import { getToken } from "../utils/localStorage";
import type { NextPage } from "next";
const Users: NextPage = () => {
  const { data, isLoading, isError } = useFetch("/api/users", getToken());
  return (
    <div>
      {/* TODO: Render Span with 'Login...' while loading data
    TODO: Render Span with Error message is error occured
    TODO: Render List of usercards */}
      {isLoading ? (
        <span>loading...</span>
      ) : isError ? (
        <span>error</span>
      ) : (
        data.map((el) => <UserCard key={el._id} {...el} />)
      )}
    </div>
  );
};

export default Users;
