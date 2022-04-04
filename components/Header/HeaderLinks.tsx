import Link from "next/link";

const HeaderLinks = () => {
  return (
    <ul className="inline-flex">
      <li className="mx-5">
        <Link href="/">home</Link>
      </li>
      <li className="mx-5">
        <Link href="/projects">projects</Link>
      </li>
      <li className="mx-5">
        <Link href="/contact">contact</Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
