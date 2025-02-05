import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import {
  meta,
  dataEvents,
  dataAbout,
  dataMixes,
  dataPress,
  dataReleases,
  dataRemixes
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">{dataAbout.title}</h3>
          </Col>
          <Col lg="9" className="d-flex align-items-center">
            <div>
              <p>{dataAbout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Press</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {dataPress.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
                          {data.title}
                        </a>
                      </th>
                      <td>{data.publication}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Releases</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {dataReleases.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
                          {data.title}
                        </a>
                        {data.note && <span style={{fontWeight: "normal", fontStyle: "italic"}}>
                          {` ${data.note}`}
                        </span>}
                      </th>
                      <td>{data.label}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Remixes and VA's</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {dataRemixes.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
                          {data.title}
                        </a>
                        {data.note && <span style={{fontWeight: "normal", fontStyle: "italic"}}>
                          {` ${data.note}`}
                        </span>}
                      </th>
                      <td>{data.label}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Mixes</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {dataMixes.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <a href={`${data.link}`}>{data.title}</a>
                        {data.note && <span style={{fontWeight: "normal", fontStyle: "italic"}}>
                          {` ${data.note}`}
                        </span>}
                      </th>
                      <td>{data.organization}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Events</h3>
          </Col>
          <Col lg="9">
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
