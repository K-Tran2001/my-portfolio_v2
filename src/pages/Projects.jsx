import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="py-8 mt-4 bg-red-500">Block 1</div>

      <div className="py-8 mt-4 bg-yellow-500">Block 2</div>
    </div>
  );
};

export default Projects;
