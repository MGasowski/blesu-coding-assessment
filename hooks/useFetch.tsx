import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${url}?api_token=${token}`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
        console.log(res);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
      });
  }, [url, token]);

  return { data, isLoading, isError, error };
};
