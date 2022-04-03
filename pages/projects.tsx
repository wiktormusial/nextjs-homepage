import axios from "axios";
import type { NextPage } from "next";
import ProjectList from "../components/ProjectsList";
import { Projects } from "../types/projects";

interface Props {
  data: Projects[];
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className="text-center mt-3">
      <ProjectList projects={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get<Projects>(
    "https://api.github.com/users/wiktormusial/repos?per_page=32"
  );

  return {
    props: {
      data: response.data,
    },
  };
}

export default Home;
