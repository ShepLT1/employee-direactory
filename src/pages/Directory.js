import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import { EmployeeList, EmployeeListItem } from "../components/EmployeeList";
import API from "../util/API";

function Directory() {

  const [employees, setEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then(res => {
        let employeeList = res.data.results.slice(0, 10)
        setEmployees(employeeList);
        setAllEmployees(employeeList);
      })
      .catch(err => console.log(err))
  }, []);

  const sortNames = (array) => {
    if (array.length <= 1) {
      return array;
    }

    // get random pivot element (and remove from array to add back in later)
    let pivot = array.splice(Math.floor(Math.random() * array.length), 1);

    // create left array (elements <= pivot), and right array (elements > pivot)
    let left = [];
    let right = [];

    array.forEach(function (el) {
      if (el.name.last <= pivot[0].name.last) {
        left.push(el);
      }
      else {
        right.push(el);
      }
    });

    // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
    // result of recursively sorting the right array (using quicksort).
    // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
    return sortNames(left).concat(pivot, sortNames(right));
  }

  const sortPhones = (array) => {
    if (array.length <= 1) {
      return array;
    }

    // get random pivot element (and remove from array to add back in later)
    let pivot = array.splice(Math.floor(Math.random() * array.length), 1);

    // create left array (elements <= pivot), and right array (elements > pivot)
    let left = [];
    let right = [];

    array.forEach(function (el) {
      if (el.phone <= pivot[0].phone) {
        left.push(el);
      }
      else {
        right.push(el);
      }
    });

    // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
    // result of recursively sorting the right array (using quicksort).
    // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
    return sortPhones(left).concat(pivot, sortPhones(right));
  }

  const sortEmails = (array) => {
    if (array.length <= 1) {
      return array;
    }

    // get random pivot element (and remove from array to add back in later)
    let pivot = array.splice(Math.floor(Math.random() * array.length), 1);

    // create left array (elements <= pivot), and right array (elements > pivot)
    let left = [];
    let right = [];

    array.forEach(function (el) {
      if (el.email <= pivot[0].email) {
        left.push(el);
      }
      else {
        right.push(el);
      }
    });

    // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
    // result of recursively sorting the right array (using quicksort).
    // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
    return sortEmails(left).concat(pivot, sortEmails(right));
  }

  const sortDOB = (array) => {
    if (array.length <= 1) {
      return array;
    }

    // get random pivot element (and remove from array to add back in later)
    let pivot = array.splice(Math.floor(Math.random() * array.length), 1);

    // create left array (elements <= pivot), and right array (elements > pivot)
    let left = [];
    let right = [];

    array.forEach(function (el) {
      if (el.dob.date <= pivot[0].dob.date) {
        left.push(el);
      }
      else {
        right.push(el);
      }
    });

    return sortDOB(left).concat(pivot, sortDOB(right));
  }

  const handleInputChange = event => {
    const { value } = event.target;
    const filteredList = employees.filter(item => {
      let employeeLast = item.name.last.toLowerCase()
      return employeeLast.indexOf(value.toLowerCase()) !== -1;
    })
    setEmployees(filteredList);

    if (value === "") {
      setEmployees(allEmployees);
      console.log(employees);
    }
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
        setEmployees(sortNames(employees))
        break;
      case "phone":
        setEmployees(sortPhones(employees))
        break;
      case "email":
        setEmployees(sortEmails(employees))
        break;
      case "dob":
        setEmployees(sortDOB(employees))
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
          <h4>Click on colomn titles to filter or use the search box to narrow your results</h4>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <form>
            <Input
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
                      image={employee.picture.large}
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