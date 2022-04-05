import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="text-center mt-10 px-5 md:p-0">
      <Head>
        <title>wiktor musial</title>
      </Head>

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
