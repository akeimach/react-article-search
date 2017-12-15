import React from "react";
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";


const Saved = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Saved Articles</h1>
      </Jumbotron>
      {props.articles.length ? (
        <List>
          {props.articles.map(article => {
            return (
              <ListItem
                key={article._id}
                id={article._id}
                title={article.title}
                href={article.url}
                date={article.date}
                buttonName="Remove Article"
                handleArticleAction={props.handleArticleAction}
              />
            );
          })}
        </List>
      ) : (
        <h3>No Saved Articles</h3>
      )}
    </div>
  );
}

export default Saved;
