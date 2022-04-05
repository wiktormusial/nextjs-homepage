import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const ProjectList = () => {
  return (
    <div className="px-5 lg:px-60 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-left ">
          <Image
            src="/1.png"
            height={250}
            width={650}
            className="object-cover rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">PL-UA Flashcards</h1>
          <p className="text-justify">
            Single Page App with 1000 most popular Polish words with definitions
            translated to Ukrainian. Words are collected from top 1000 most
            popular polish words.
          </p>
          <div className="float-right mt-2">
            <a href="https://github.com/wiktormusial/pl-ua-flashcards">
              <button className="text-sm">SEE MORE</button>
            </a>
          </div>
        </div>
        <div className="text-left">
          <Image
            src="/4.jpeg"
            height={250}
            width={650}
            className="object-cover rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Fit file viewer</h1>
          <p className="text-justify">
            Client for viewing files from sport wearables e.g. Garmin or Wahoo.
            In this purpouse used for road cycling.
          </p>
          <div className="float-right mt-2">
            <a href="https://github.com/wiktormusial/fitfileclient">
              <button className="text-sm">SEE MORE</button>
            </a>
          </div>
        </div>
        <div className="text-left">
          <Image
            src="/2.jpeg"
            height={250}
            width={650}
            className="object-cover rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Whapi</h1>
          <p className="text-justify">
            Design for simple wheater client created to pratice some of Material
            Design concepts. Provided with mobile app.
          </p>
          <div className="float-right mt-2">
            <a href="https://github.com/wiktormusial/whapi">
              <button className="text-sm">SEE MORE</button>
            </a>
          </div>
        </div>
        <div className="text-left">
          <Image
            src="/5.png"
            height={250}
            width={650}
            className="object-cover rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Wordie</h1>
          <p className="text-justify">
            CLone of popular game Wordle which is a web-based puzzle that
            requires players to guess a valid five-letter word in six tries or
            less.
          </p>
          <div className="float-right mt-2">
            <a href="https://github.com/wiktormusial/wordie">
              <button className="text-sm">SEE MORE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
