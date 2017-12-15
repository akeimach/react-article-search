import React from "react";
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";


const Article = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>{props.containerName}</h1>
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
                buttonName={props.buttonName}
                handleArticleAction={props.handleArticleAction}
              />
            );
          })}
        </List>
      ) : (
        <h3>Nothing here yet</h3>
      )}
    </div>
  );
}

export default Article;
