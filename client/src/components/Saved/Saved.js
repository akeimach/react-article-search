import React from "react";
import Article from "../Article";


const Saved = (props) => {
  return (
    <Article
      containerName="Saved Articles"
      buttonName="Remove Article"
      handleArticleAction={props.handleRemoveArticle}
      articles={props.saved}
    />
  );
}

export default Saved;
