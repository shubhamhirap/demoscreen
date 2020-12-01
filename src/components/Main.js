import React from "react";
import { Button } from "@material-ui/core";
import image from "../images/image.png";

const Main = () => {
  return (
    <div className="main">
      <img src={image} alt="table, photos and books contained graphics" />
      <h2>Hmm, no Class or Series drafts here</h2>
      <p>
        Maybe you've published them all, or haven't created any yet? Either way
      </p>
      <p>there is no time like the present to create anew Class or Series!</p>
      <Button variant="contained" color="primary">
        Create a new Class or Series
      </Button>
    </div>
  );
};

export default Main;
