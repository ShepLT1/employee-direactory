import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import { EmployeeList, EmployeeListItem } from "../components/EmployeeList";
import API from "../util/API";

function Directory() {

  const [searchState, setSearchState] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then(res => setEmployees(res.data.results.slice(0, 10)))
      .catch(err => console.log(err))
  }, []);

  // Write function that searches by employee lastname based on input's state

  const handleInputChange = event => {
    const { value } = event.target;
    console.log(value);
    setSearchState(value);

    // Run function from line 18
  };

  const formatDOB = (date) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    return `${month}-${day}-${year}`
  }

  const handleSort = event => {
    const sortParam = event.target.getAttribute("data-title");
    console.log(sortParam);
    switch (sortParam) {
      case "name":
        // sort by name into new array & setEmployees equal to new array
        break;
      case "phone":
        // sort by phone into new array & setEmployees equal to new array
        break;
      case "email":
        // sort by email into new array & setEmployees equal to new array
        break;
      case "dob":
        // sort by dob into new array & setEmployees equal to new array
        break;
      default:
        return
    }

  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>Employee Directory</h1>
          <h4>Click on carrots to filter by heading or use the search box to narrow your results</h4>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <form>
            <Input
              value={searchState}
              onChange={handleInputChange}
              name="search"
              placeholder="Search by last name"
            />
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          {!employees.length ? (
            <h1 className="text-center">No Employees to Display</h1>
          ) : (
              <EmployeeList onClick={handleSort}>
                {employees.map(employee => {
                  return (
                    <EmployeeListItem
                      key={employee.phone}
                      thumbnail={employee.picture.thumbnail}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      dob={formatDOB(employee.dob.date)}
                    />
                  );
                })}
              </EmployeeList>
            )}
        </Col>
      </Row>
    </Container>
  )
}

export default Directory;