import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Search from "../Search";
import Results from "../Results";
import Saved from "../Saved";
import API from "../../utils/API";
import { Route, Redirect } from "react-router-dom";


class Main extends Component {

  state = {
    results: [],
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
    .then(res => this.setState({ saved: res.data }))
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
        // format the json object to normalize with mongo db
        const formatJson = res.data.response.docs.map(object => {
          return {
            title: object.headline.main,
            date: object.pub_date,
            url: object.web_url,
            _id: object._id
          }
        });
        this.setState({ results: formatJson });
      })
      .catch(err => console.log(err));
    }
  };

  handleSaveArticle = id => {
    API.saveArticle(this.state.results.filter(article => article._id === id))
    .then(res => this.getArticles())
    .catch(err => console.log(err));
  };


  handleRemoveArticle = id => {
    API.deleteArticle(id)
    .then(res => this.getArticles())
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Route exact path="(/|/search)" render={() => (
                <Search
                  searchTerm={this.state.searchTerm}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                  handleInputChange={this.handleInputChange}
                  handleSearchArticles={this.handleSearchArticles}
                />
              )}/>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Route exact path="/results" render={() => (
                <Results
                  results={this.state.results}
                  handleSaveArticle={this.handleSaveArticle}
                />
              )}/>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Route exact path="/saved" render={() => (
                <Saved
                  saved={this.state.saved}
                  handleRemoveArticle={this.handleRemoveArticle}
                />
              )}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
