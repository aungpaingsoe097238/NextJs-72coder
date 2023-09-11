import React from "react";

const blogDetail = ({ post }) => {
  return <div>{post.title}</div>;
};

export default blogDetail;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
