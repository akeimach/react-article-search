import React from "react";
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";


const Results = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Search Results</h1>
      </Jumbotron>
      {props.articles.length ? (
        <List>
          {props.articles.map(article => {
            return (
              <ListItem
                key={article._id}
                id={article._id}
                title={article.headline.main}
                href={article.web_url}
                date={article.pub_date}
                buttonName="Save Article"
                handleArticleAction={props.handleArticleAction}
              />
            );
          })}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Results;
