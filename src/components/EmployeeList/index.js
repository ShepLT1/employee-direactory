import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function EmployeeList({ children, onClick }) {
  return (
    <Container>
      <Row>
        <Col size="md-2">
          <h5>Image</h5>
        </Col>
        <Col size="md-2">
          <h5 className="sort" data-title="name" onClick={onClick}>Name</h5>
        </Col>
        <Col size="md-2">
          <h5 className="sort" data-title="phone" onClick={onClick}>Phone</h5>
        </Col>
        <Col size="md-4">
          <h5 className="sort" data-title="email" onClick={onClick}>Email</h5>
        </Col>
        <Col size="md-2">
          <h5 className="sort" data-title="dob" onClick={onClick}>DOB</h5>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export function EmployeeListItem({
  image,
  firstName,
  lastName,
  phone,
  email,
  dob
}) {
  return (
    <Container>
      <Row>
        <Col size="md-2">
          <Thumbnail src={image || "https://placehold.it/300x300"} />
        </Col>
        <Col size="md-2">
          <p>{firstName} {lastName}</p>
        </Col>
        <Col size="md-2">
          <p>{phone}</p>
        </Col>
        <Col size="md-4">
          <p>{email}</p>
        </Col>
        <Col size="md-2">
          <p>{dob}</p>
        </Col>
      </Row>
    </Container>
  );
}
