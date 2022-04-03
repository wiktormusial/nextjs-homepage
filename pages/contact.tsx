import { NextPage } from "next/types";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Contact: NextPage = () => {
  return (
    <div className="grid justify-items-center mt-5">
      <h1 className="text-2xl mb-5">Send me a message</h1>
      <div className="flex">
        <a
          href="https://github.com/wiktormusial"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="text-5xl mr-5 transition-all hover:fill-gray-700 cursor-pointer" />
        </a>
        <a href="https://twitter.com/wikmus" target="_blank" rel="noreferrer">
          <BsTwitter className="text-5xl mr-5 transition-all hover:fill-gray-700 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
