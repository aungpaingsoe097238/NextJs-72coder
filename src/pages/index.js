import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div>
      <Link href={"/post"}>
        Go To Post
      </Link>
    </div>
  );
};

export default home;
