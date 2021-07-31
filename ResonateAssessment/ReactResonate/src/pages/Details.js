import { useEffect, useState } from "react";
import axios from "axios";
import ProfileUi from "../components/ProfileUI";
import { useParams } from "react-router-dom";
import { Card, CardColumns } from "react-bootstrap";
import NavBar from "../components/NavBar";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Details() {
  const { id } = useParams();
  const [userObj, setObj] = useState({});
  const [geo, setGeo] = useState([]);
  const [street, setStreet] = useState();
  const [suite, setSuite] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipCode] = useState();
  const [company, setCompany] = useState({});
  const [toggle, setToggle] = useState(false);
  const [html, setHTML] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const id_no = parseInt(id);
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    });
    setObj(res.data[id_no - 1]);
    let dummy = [];
    dummy.push(res.data[id_no - 1]?.address?.geo?.lat);
    dummy.push(res.data[id_no - 1]?.address?.geo?.lng);
    setGeo(dummy);
    setZipCode(res.data[id_no - 1]?.address?.zipcode);
    setStreet(res.data[id_no - 1]?.address?.street);
    setSuite(res.data[id_no - 1]?.address?.suite);
    setCity(res.data[id_no - 1]?.address?.city);
    setCompany(res.data[id_no - 1]?.company);
  }, []);
  return (
    <>
      <NavBar
        text="GO BACK TO YOUR CONTACTS"
        img="https://img.icons8.com/ios-filled/50/ffffff/long-arrow-left.png"
      />
      <Card
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "50px",
          justifyContent: "center",
        }}
        className="cardcustom"
        text="white"
      >
        <Card.Header as="h5">
          Contact Details{" "}
          <img src="https://img.icons8.com/ios-filled/30/ffffff/contact-card.png" />{" "}
        </Card.Header>
        <Card.Body style={{ justifyContent: "center" }}>
          <Card.Title></Card.Title>
          <div style={{ margin: "auto" }}>
            <ProfileUi
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6rZGhDg-u7sdMFU2DqYNuY0jgwOCB5e8vA&usqp=CAU"
              name={`${userObj.name}`}
              designation={`@${userObj.username}`}
            />
          </div>

          <Card.Text>
            <div>
              {" "}
              <i>Name</i> - <b>{userObj.name}</b>
            </div>
            <div>
              {" "}
              <i>Address</i> -{" "}
              <b>
                {street}, {suite}, {city}, {zipcode}
              </b>{" "}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${geo[0]}%2C${geo[1]}`}
                target="_blank"
              >
                <img src="https://img.icons8.com/pastel-glyph/20/ffffff/worldwide-location--v2.png" />{" "}
              </a>
            </div>
            <div>
              {" "}
              <i>Phone</i> - <b>{userObj.phone}</b>{" "}
              <a href="https://globfone.com/call-phone-online" target="_blank">
                <img src="https://img.icons8.com/ios-filled/20/ffffff/phone.png" />{" "}
              </a>
            </div>
            <div>
              <i>Email</i> - <b>{userObj.email}</b>
              {"  "}
              <a href={`mailto:${userObj.email}`}>
                <img src="https://img.icons8.com/ios/20/ffffff/send-mass-email.png" />{" "}
              </a>{" "}
            </div>
            <div>
              {" "}
              <i>Website</i> - <b>{userObj.website}</b>{" "}
              <a href={`https://${userObj.website}`} target="_blank">
                {/* // eslint-disable-next-line jsx-a11y/alt-text */}
                <img src="https://img.icons8.com/ios-glyphs/20/ffffff/link--v1.png" />{" "}
              </a>{" "}
            </div>
            <Button
              size="sm"
              className="button2"
              onClick={(e) => {
                e.preventDefault();
                if (!toggle) {
                  let innerHTML = `
                  <br>
                  <br>
                    <div> <i>Company Name</i> -  <b>${company.name}</b> </div>
                    <div> <i>Our Motto</i> -  <b>${company.catchPhrase}</b> </div>
                    <div> <i>Business/Industry</i> -  <b>${company.bs}</b> </div>`;
                  setToggle(true);
                  setHTML(innerHTML);
                } else {
                  setToggle(false);
                  setHTML("");
                }
              }}
            >
              {toggle ? "HIDE DETAILS" : "COMPANY DETAILS"}{" "}
              {!toggle ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src="https://img.icons8.com/ios/20/ffffff/circled-chevron-down.png" />
              ) : (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src="https://img.icons8.com/ios/20/ffffff/circled-chevron-up.png" />
              )}{" "}
            </Button>
            <div
              className="gx-2 px-2"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Details;
