import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Main from "../components/Main";

const Screen = () => {
  return (
    <div className="container">
      <div>
        <LeftSidebar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Screen;
