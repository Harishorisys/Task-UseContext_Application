import React, { useEffect } from "react";
import { useSharedState } from "../SharedStateContext";

const Home = () => {
  const { setPageTitle } = useSharedState();

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
    <div className="content">
      <div>
        <h2>Welcome to Home page </h2>
      </div>
    </div>
  );
};

export default Home;
