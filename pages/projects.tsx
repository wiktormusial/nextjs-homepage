import type { NextPage } from "next";
import Head from "next/head";
import ProjectList from "../components/ProjectsList";
import { Projects } from "../types/projects";

interface Props {
  data: Projects[];
}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectList />
    </>
  );
};

export default Home;
