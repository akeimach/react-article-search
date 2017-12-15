import React, { Component } from "react";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import Search from "./components/Search";
// import Results from "./components/Results";
// import Saved from "./components/Saved";
import API from "./utils/API";
import { BrowserRouter as Router } from "react-router-dom";


class Main extends Component {

  state = {
    articles: [],
    saved: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
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

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Search
                  searchTerm={this.state.searchTerm}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                  handleInputChange={this.handleInputChange}
                  handleSearchArticles={this.handleSearchArticles}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default Main;
