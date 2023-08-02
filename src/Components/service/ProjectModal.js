import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import Button from "./Button";

const ProjectModal = ({ projectName, projectTitle, text, techUsed, gitLink, online, buttonText, img }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="flex flex-col text-left md:flex-row items-center bg-gray-200 border border-black rounded-2xl p-4 space-y-4 md:space-y-0 md:space-x-4 w-full h-3/4 mx-auto my-4">
      <div className="flex flex-col w-full md:w-72">
        <p className="text-green-600 font-bold mb-2">Project: {projectName}</p>
        <h2 className="text-2xl text-black font-bold mb-2">{projectTitle}</h2>
        <section className="text-black">{text}</section>
        <p className="mt-4 text-black">Technologies used: {techUsed}</p>
        <div className="mt-4">
          <Button href={gitLink} />
          {online&& <Button href={online} text={buttonText} />}
        </div>
      </div>
      {loading ? (
        <ContentLoader speed={2} width={900} height={350}>
          <rect x="50" y="15" rx="50" ry="50" width="800" height="350" />
        </ContentLoader>
      ) : (
        <img src={img} className="w-full md:w-3/4 rounded-xl shadow-md" alt="Project" />
      )}
    </div>
  );
};

export default ProjectModal;
