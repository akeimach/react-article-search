import React from "react";
import Jumbotron from "../Jumbotron";
import { Input, FormBtn } from "../Form";


const Search = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Search Parameters</h1>
      </Jumbotron>
      <form>
        <Input
          value={props.searchTerm}
          onChange={props.handleInputChange}
          name="searchTerm"
          placeholder="Your search"
          label="Search Term (required)"
          type="text"
        />
        <Input
          value={props.startYear}
          onChange={props.handleInputChange}
          name="startYear"
          placeholder="YYYY"
          label="Start Year"
          type="number"
        />
        <Input
          value={props.endYear}
          onChange={props.handleInputChange}
          name="endYear"
          placeholder="YYYY"
          label="End Year"
          type="number"
        />
        <FormBtn
          name="Search"
          disabled={!(props.searchTerm)}
          onClick={props.handleSearchArticles}
        />
      </form>
    </div>
  );
}

export default Search;
