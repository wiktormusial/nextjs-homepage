import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="px-5 mt-10 text-center md:p-0">
      <Head>
        <title>Wiktor Musial</title>
      </Head>
      <Image
        src="https://wiktormusial.s3.eu-central-1.amazonaws.com/headphoto.jpeg"
        height={500}
        width={650}
        alt="Car staying in front of white house"
      />
    </div>
  );
};

export default Home;
