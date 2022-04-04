import { NextPage } from "next/types";

const Contact: NextPage = () => {
  return (
    <div className="px-60 mt-10">
      <h1 className="text-2xl mb-2">Contact</h1>
      <p>
        Feel free to contact with me via email:{" "}
        <a
          className="text-blue-500 underline"
          href="mailto:wiktormusial@icloud.com"
        >
          wiktormusial@icloud.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
