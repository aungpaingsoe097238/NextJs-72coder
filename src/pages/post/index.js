import Link from "next/link";
import React from "react";

const post = ({ posts }) => {
  return posts.map((item) => (
    <div key={item.id}>
      <Link href={`/post/${item.id}`}>
        {item.id} - {item.title}
      </Link>
    </div>
  ));
};

export default post;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data
    },
  };
}
