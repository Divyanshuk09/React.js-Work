import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/359fa2e24c9d7c456e784cf1/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates)) 
      .catch((error) => console.error("Error fetching currency info:", error));
  }, [currency]);

  console.log(data); 
  return data;
}

export default useCurrencyInfo;
