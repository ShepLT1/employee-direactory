import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";

function Directory() {

  const [searchState, setSearchState] = useState("");
  // const [employees, setEmployees] = useState([]);

  // Write function that searches by employee lastname (via an API call) based on input's state

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    console.log(value);
    setSearchState(value);

    // Run function from line 10
  };

  return (
    <Container fluid>
      <Row>
        <Col size="col-md-12">
          <h1>Employee Directory</h1>
          <h4>Click on controls to filter by heading or use the search box to narrow your results</h4>
        </Col>
      </Row>
      <Row>
        <Col size="col-md-12">
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
      {/* <Row>  COMMENT: see module 21, activity 2 for how to set up components
          <Col size="xs-12">
            {!recipes.length ? (
              <h1 className="text-center">No Recipes to Display</h1>
            ) : (
              <RecipeList>
                {recipes.map(recipe => {
                  return (
                    <RecipeListItem
                      key={recipe.title}
                      title={recipe.title}
                      href={recipe.href}
                      ingredients={recipe.ingredients}
                      thumbnail={recipe.thumbnail}
                    />
                  );
                })}
              </RecipeList>
            )}
          </Col>
        </Row> */}
    </Container>
  )
}

export default Directory;