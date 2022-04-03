import Link from "next/link";

const HeaderLinks = () => {
  return (
    <ul className="inline-flex">
      <li className="mr-4">
        <Link href="/">home</Link>
      </li>
      <li className="mr-4">
        <Link href="/">projects</Link>
      </li>
      <li className="mr-4">
        <Link href="/">blog</Link>
      </li>
      <li className="mr-4">
        <Link href="/">contact</Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
