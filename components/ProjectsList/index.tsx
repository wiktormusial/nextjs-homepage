import { Projects } from "../../types/projects";

interface Props {
  projects: Projects[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <ul>
      {projects.map((item) => {
        return (
          <li key={item.name} className="my-3 underline text-blue-500">
            <a href={item.html_url} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
