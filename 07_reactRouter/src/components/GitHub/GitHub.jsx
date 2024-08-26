// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/TanveerHussain34")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="flex justify-center items-center flex-col text-center m-4 bg-gray-600 text-3xl text-white p-4">
      Your GitHub followers are {data.followers}.
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/TanveerHussain34");
  return response.json();
};
