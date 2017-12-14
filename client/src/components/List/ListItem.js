import React from "react";
import { Container, Row, Col } from "../Grid";
import { FormBtn } from "../../components/Form";


export const ListItem = props =>
  <li className="list-group-item">
    <Container fluid="true">
      <Row fluid="true">
        <Col size="xs-12 sm-12">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >
            <h3>{props.title}</h3>
          </a>
          <FormBtn
            onClick={() => props.handleSaveArticle(props.id)}>
            Save Article
          </FormBtn>
        </Col>
      </Row>
    </Container>
  </li>;
