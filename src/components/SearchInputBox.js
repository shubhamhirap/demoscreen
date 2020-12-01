import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
const SearchInputBox = () => {
  return (
    <div>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase variant="outlined" placeholder="Search in drafts.." />
    </div>
  );
};

export default SearchInputBox;
