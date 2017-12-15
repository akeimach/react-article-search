import React from "react";
import Article from "../Article";


const Results = (props) => {
  return (
    <Article
      containerName="Search Results"
      buttonName="Save Article"
      handleArticleAction={props.handleSaveArticle}
      articles={props.results}
    />
  );
}

export default Results;
