import type { NextPage } from "next";
import ProjectList from "../components/ProjectsList";
import { Projects } from "../types/projects";

interface Props {
  data: Projects[];
}

const Home: NextPage<Props> = () => {
  return <ProjectList />;
};

export default Home;
