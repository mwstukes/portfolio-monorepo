import React from "react";
import Image from 'react-bootstrap/Image';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import {
  meta,
  dataRemixes,
} from "../../content_option";

export const Remixes = () => {
  return (
    <HelmetProvider>
      <Container className="Remixes-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Remixes and VA's | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Remixes and VA's</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          {dataRemixes.map((data, i) => {
            return (
              <Col lg="4" key={i}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <Image src={data.image} alt="" thumbnail />
                </a>
                <div className="content">
                  <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
                  <p style={{marginBottom: 0}}>{data.label}</p>
                  {data.note && <p style={{fontWeight: "normal", fontStyle: "italic"}}>{data.note}</p>}
                  <p>{data.date}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
