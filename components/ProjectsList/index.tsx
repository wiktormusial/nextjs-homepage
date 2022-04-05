import Image from "next/image";

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
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
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
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
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
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
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
            Wordle is a daily word game you can find online here. It's fun,
            simple and, like a crossword, can only be played once a day.
          </p>
          <div className="text-right">
            <button className="text-sm"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
