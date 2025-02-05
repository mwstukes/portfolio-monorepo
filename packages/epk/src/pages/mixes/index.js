import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import {
  meta,
  dataMixes
} from "../../content_option";

export const Mixes = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Mixes | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Mixes</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="12">
            <table className="table caption-top">
              <tbody>
                {dataMixes.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <a href={`${data.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecorationThickness: ".5px" }}>{data.title}</a>
                        {data.note && <p style={{fontWeight: "normal", fontStyle: "italic", marginBottom: 0}}>
                          {data.note}
                        </p>}
                        {data.video && <p style={{fontWeight: "normal", fontStyle: "italic", marginBottom: 0}}>
                          <a href={`${data.video}`} target="_blank" rel="noopener noreferrer" style={{ textDecorationThickness: ".5px" }}>Video</a>
                        </p>}
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
      </Container>
    </HelmetProvider>
  );
};
