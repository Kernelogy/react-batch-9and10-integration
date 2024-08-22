import { useState, useEffect } from "react";

const useFetch = (url, method, data) => {
  const [responseData, setresponseData] = useState(null);

  useEffect(() => {
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((responseData) => setresponseData(responseData));
  }, [url]);

  return [responseData];
};

export default useFetch;