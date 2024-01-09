import React, { useEffect } from "react";
import { useSharedState } from "../SharedStateContext";

const About = () => {
  const { setPageTitle } = useSharedState();

  useEffect(() => {
    setPageTitle("About");
  }, [setPageTitle]);
  return (
    <div className="content">
      <div>
        <h2>Welcome to About Page</h2>
      </div>
    </div>
  );
};

export default About;
