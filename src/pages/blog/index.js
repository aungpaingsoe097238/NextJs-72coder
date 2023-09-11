import Link from "next/link";
import React from "react";

const Blog = ({ posts }) => {
  return posts.map((item) => {
    return (
      <Link href={`/blog/${item.id}`}>
        <div key={item.id}>{item.title}</div>
      </Link>
    );
  });
};

export default Blog;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
