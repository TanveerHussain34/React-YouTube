import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the API
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Parse JSON
      .then((res) => {
        setData(res[currency]); // Set the data for the specific currency
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error); // Handle errors
      });
  }, [currency]); // Only re-run when the currency changes
  console.log(data);
  return data; // Return the fetched data
}

export default useCurrencyInfo;
