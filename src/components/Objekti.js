import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import{
    Card,
    CardImg,
    CardBody,
    CardText
  } from "reactstrap";


// core components

const objekt = [
    { id: 1, naziv: "Elite Night CLub", lokacija: "asd" },
    { id: 2, naziv: "Luxe lounge bar", lokacija: "asd" },
    { id: 3, naziv: "Cristallo concept bar", lokacija: "asd" },
    { id: 4, naziv: "Caffe bar Red Carpet", lokacija: "asd" }
  ];


function Objekti() {
  return (
    <>
      <div className="section section-images" id="sample-code">
        <Container>
        <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          data-src="../assets/img/objekti/elite.jpg"
          top
        ></CardImg>
        <CardBody>
          <CardText>
            {objekt.map(i => (
              i.naziv
            ))}
          </CardText>
        </CardBody>
      </Card>
        </Container>
       
      </div>
    </>
  );
}

export default Objekti;
