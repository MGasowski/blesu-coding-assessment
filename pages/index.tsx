import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { setToken } from "../utils/localStorage";
import axios from "axios";

const Home: NextPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSignIn = () => {
    try {
      /*
       * Endpoint : '/api/auth'
       * body: {username:username, password:password}
       * return: api_token:<token>
       */
      // TODO Implement Request to api andpoint and save token to local storage via setToken()
      //setToken()

      // axios
      //   .post("/api/auth", { username, password })
      //   .then((res) => setToken(res.data.api_token));
      axios
        .post("api/auth", { username, password })
        .then(({ data: { api_token } }) => setToken(api_token));
      router.push("/users");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-80">
      <span>Username</span>
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="border border-black"
      />

      <span>Password</span>
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border border-black"
      />
      <button onClick={handleSignIn} className="border border-black mt-2">
        {" "}
        Login
      </button>
    </div>
  );
};

export default Home;
