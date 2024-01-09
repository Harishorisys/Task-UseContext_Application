import React, { useEffect } from "react";
import { useSharedState } from "../SharedStateContext";

const Contact = () => {
  const { setPageTitle } = useSharedState();

  useEffect(() => {
    setPageTitle("Contact");
  }, [setPageTitle]);

  return (
    <div className="content">
      <div>
        <h2>Welcome to Contact Page</h2>
      </div>
    </div>
  );
};

export default Contact;
