import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
  Toast,
} from "react-bootstrap";
function Contacts() {
  const [dataArr, setDataArr] = useState([]);
  const [filter_text, setFilter_text] = useState("");

  const updateFilterText = (event) => {
    const new_ft = event.target.value;
    setFilter_text(new_ft);
  };

  const goToDetails = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    location.assign(`/details/${e.target.id}`);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    });
    setDataArr(res.data);
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="gy-4 py-4"></Row>
        <Row className="gy-6 py-5">
          <h1>
            View/Search Your Contacts{" "}
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search-contacts.png" />
          </h1>
        </Row>
        <Row xs={4} className="gy-4 py-4">
          <Col xs={4} bg="light">
            <Form className="form-inline">
              <FormControl
                id="query_str"
                placeholder="Type to filter names"
                value={filter_text}
                onChange={updateFilterText}
              />
              <span>{"🔎"}</span>
            </Form>
          </Col>
          <Col xs={6}>
            <ListGroup variant="flush">
              {dataArr.map((user, index) => {
                if (
                  user.name.toLowerCase().includes(filter_text.toLowerCase())
                ) {
                  return (
                    <ListGroup.Item
                      key={index}
                      // action
                      className="cardItem"
                      as="ul"
                    >
                      <div id="bigList">
                        {user.name}
                        <span
                          id="spanSpace"
                          className="badge badge-pill badge-secondary"
                        >
                          CONNECTED
                        </span>
                        <Button
                          variant="success"
                          size="sm"
                          id={user.id}
                          className="button1"
                          onClick={goToDetails}
                        >
                          USER INFO{" "}
                          <img src="https://img.icons8.com/small/24/ffffff/view-details.png" />{" "}
                        </Button>
                      </div>
                    </ListGroup.Item>
                  );
                }
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contacts;
