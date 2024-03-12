// -- Core
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    // -- API Fetch
    fetch(url)
      .then((response) => response.json())
      .then((resData) => {
        setData(resData);
      });
    }, [url]);

    return {data};
};

export default useFetch;