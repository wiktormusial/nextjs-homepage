import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="text-center mt-5 p-5 md:p-0">
      <Image
        src="/albumtemp.JPG"
        height={500}
        width={650}
        alt="Car staying in front of white house"
      />
    </div>
  );
};

export default Home;
