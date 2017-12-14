import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    saved: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.getArticles();
  };

  getArticles = () => {
    API.getArticles()
    .then(res => {
      this.setState({ saved: res.data });
      console.log(this.state.saved);
    })
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchArticles = event => {
    event.preventDefault();
    if (this.state.searchTerm) {
      API.searchArticles({
        searchTerm: this.state.searchTerm,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
      .then(res => {
        this.setState({ articles: res.data.response.docs });
        console.log(res.data.response.docs);
      })
      .catch(err => console.log(err));
    }
  };

  handleSaveArticle = id => {
    const articleData = this.state.articles.filter(article => article._id === id);
    API.saveArticle({
      title: articleData["0"].headline.main,
      date: articleData["0"].pub_date,
      url: articleData["0"].web_url
    })
    .then(res => console.log("saved", articleData))
    .catch(err => console.log(err));
  };


  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search Parameters</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                name="searchTerm"
                placeholder="Your search"
                label="Search Term (required)"
                type="text"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="YYYY"
                label="Start Year"
                type="number"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="YYYY"
                label="End Year"
                type="number"
              />
              <FormBtn
                disabled={!(this.state.searchTerm)}
                onClick={this.handleSearchArticles}
              >
              Start Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem
                      key={article._id}
                      id={article._id}
                      title={article.headline.main}
                      href={article.web_url}
                      date={article.pub_date}
                      handleSaveArticle={this.handleSaveArticle}
                    />
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.saved.length ? (
              <List>
                {this.state.saved.map(article => {
                  return (
                    <ListItem
                      key={article._id}
                      id={article._id}
                      title={article.title}
                      href={article.url}
                      date={article.date}
                      // handleDeleteArticle={this.handleDeleteArticle}
                    />
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
