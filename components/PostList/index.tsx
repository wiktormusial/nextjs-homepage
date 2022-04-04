import Link from "next/link";

const PostList = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 px-60">
      <article className="mt-10">
        <h1 className="text-2xl">Sample post</h1>
        <p className="mb-5">22/2/2022</p>
        <p className="mb-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          posuere feugiat nunc non convallis. Morbi volutpat arcu tempus felis
          fringilla, sed sodales nisl luctus. Curabitur ornare blandit eros, ut
          posuere velit congue ut...
        </p>
        <Link href="/">
          <a className="text-blue-500 underline">Read more</a>
        </Link>
      </article>
      <article className="my-9">
        <h1 className="text-2xl">Sample post</h1>
        <p className="mb-5">22/2/2022</p>
        <p className="mb-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          posuere feugiat nunc non convallis. Morbi volutpat arcu tempus felis
          fringilla, sed sodales nisl luctus. Curabitur ornare blandit eros, ut
          posuere velit congue ut...
        </p>
        <Link href="/">
          <a className="text-blue-500 underline">Read more</a>
        </Link>
      </article>
    </div>
  );
};

export default PostList;
