import Image from "next/image";

const ProjectList = () => {
  return (
    <div className="px-5 lg:px-60 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="text-left ">
          <Image
            src="/albumtemp.JPG"
            height={250}
            width={650}
            className="object-cover object-top rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Test test</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis commodo sapien. Aliquam vel ex velit. Quisque vehicula libero
            rutrum bibendum blandit.
          </p>
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
          </div>
        </div>
        <div className="text-left">
          <Image
            src="/albumtemp.JPG"
            height={250}
            width={650}
            className="object-cover object-top rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Test test</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis commodo sapien. Aliquam vel ex velit. Quisque vehicula libero
            rutrum bibendum blandit.
          </p>
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
          </div>
        </div>
        <div className="text-left">
          <Image
            src="/albumtemp.JPG"
            height={250}
            width={650}
            className="object-cover object-top rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Test test</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis commodo sapien. Aliquam vel ex velit. Quisque vehicula libero
            rutrum bibendum blandit.
          </p>
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
          </div>
        </div>
        <div className="text-left">
          <Image
            src="/albumtemp.JPG"
            height={250}
            width={650}
            className="object-cover object-top rounded-t"
            alt="Car staying in front of white house"
          />
          <h1 className="text-xl mt-2">Test test</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis commodo sapien. Aliquam vel ex velit. Quisque vehicula libero
            rutrum bibendum blandit.
          </p>
          <div className="text-right">
            <button className="text-sm">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
