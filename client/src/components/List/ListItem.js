import React from "react";
import { Container, Row, Col } from "../Grid";
import { FormBtn } from "../../components/Form";


export const ListItem = props =>
  <li className="list-group-item">
    <Container fluid="true">
      <Row fluid="true">
        <Col size="xs-8 sm-8">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >
            <h3>{props.title}</h3>
          </a>
        </Col>
        <Col size="xs-5 sm-4">
          <FormBtn
            name={props.buttonName}
            onClick={() => props.handleArticleAction(props.id)}>
          </FormBtn>
        </Col>
      </Row>
    </Container>
  </li>;
