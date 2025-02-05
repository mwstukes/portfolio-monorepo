import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig, socialProfiles } from "../../content_option";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Contact | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.email}`}>
                {contactConfig.email}
              </a>
              </address>
              <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:marshall@blacktechnomatters.org`}>
                marshall@blacktechnomatters.org
              </a>
            </address>
            <strong>Instragram:</strong>{" "}
              <a href={`${socialProfiles.instagram}`} target="_blank" rel="noopener noreferrer">
                @stukesm4
              </a>
              <br />
              <br />
            <p>{contactConfig.description}</p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
