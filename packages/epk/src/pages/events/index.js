import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataEvents, meta } from "../../content_option";

export const Events = () => {
  const placeHolder = '/me.jpg';

  const onImageError = (e) => {
    e.target.src = placeHolder;
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Events | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Events</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="12">
            <table className="table caption-top">
              <tbody>
                {dataEvents.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row" style={{ textUnderlineOffset: "3px" }}>
                        <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
                          {data.title}
                        </a>
                        {data.note && <span style={{fontWeight: "normal", fontStyle: "italic"}}>
                        {` ${data.note}`}
                        </span>}
                      </th>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
