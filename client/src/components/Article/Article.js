import React from "react";
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";


const Article = (props) => {
  return (
    <div>
      {props.articles.length > 0 &&
        <div>
          <Jumbotron>
            <h1>{props.containerName}</h1>
          </Jumbotron>
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
        </div>
      }
    </div>
  );
}

export default Article;
