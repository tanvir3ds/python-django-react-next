import axios from 'axios';
import { useEffect, useState } from 'react';

const HttpRequestGet = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setIsLoaded(false);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [url]);

  return { error, isLoaded, data };
};

export default HttpRequestGet;
