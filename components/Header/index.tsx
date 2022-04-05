import Link from "next/link";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="text-center mt-5">
      <h1 className="text-5xl font-bold mb-3">
        <Link href="/">wiktor musiał</Link>
      </h1>
      <HeaderLinks />
    </header>
  );
};

export default Header;
