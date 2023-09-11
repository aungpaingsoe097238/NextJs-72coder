import React from "react";
import { useRouter } from "next/router";

const postDetail = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading ....</div>;
  } else {
    return <div>{post.title}</div>;
  }
};

export default postDetail;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // const paths = data.map((item)=>{
  //     return {
  //         params : { id : `${item.id}` }
  //     }
  // });

  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    // paths : paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
    revalidate: 10
  };
}
