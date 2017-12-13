import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    article: {}
  };
  // Add code to get the article with an _id equal to the id in the route param
  // e.g. http://localhost:3000/articles/:id
  componentDidMount() {
    // console.log("did mount");
    // console.log(this.props);
    API.getArticle(this.props.match.params.id)
    .then(res => {
      console.log(res.data);
      this.setState({ article: res.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.article.title} by {this.state.article.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.article.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
