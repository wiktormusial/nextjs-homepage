import Head from "next/head";
import { NextPage } from "next/types";

const Contact: NextPage = () => {
  return (
    <div className="px-5 md:px-60 mt-10">
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="text-2xl mb-2">Contact</h1>
      <p className="mb-6">
        Feel free to contact with me via email:{" "}
        <a
          className="text-blue-500 underline"
          href="mailto:wiktormusial@icloud.com"
        >
          wiktormusial@icloud.com
        </a>
      </p>
      <h1 className="text-2xl mb-2">Social Links</h1>
      <ul>
        <li>
          Twitter{" "}
          <a
            className="text-blue-500 underline"
            href="https://twitter.com/wikmus"
            target="_blank"
            rel="noreferrer"
          >
            https://twitter.com/wikmus
          </a>
        </li>
        <li>
          Github{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/wiktormusial"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/wiktormusial
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
