import React, { useState } from "react";
import useSWR from "swr";

const fatcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

const todo = () => {
  const { data, error } = useSWR("todo-fetch", fatcher);

  if (error) return <h1>Error occur while fatching Data.</h1>;

  if (!data) return <h1>Loading...</h1>;

  return data.map((item) => {
    return <h1 key={item.id}>{item.title}</h1>;
  });
};

export default todo;
