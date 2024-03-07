import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const source = axios.CancelToken.source();

    try {
      axios.get(url, { cancelToken: source.token }).then((res) => {
        setLoading(false);
        res.data && setData(res.data);
      });
    } catch (err) {
      setError(err);
    }
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
