import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import coverImg from '../assets/ebook-cover.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col>
            <div className="col-lg-8 text-center text-md-start">
              <h1>
                <div className="display-2">Black-Belt</div>
                <div className="display-5 text-muted">Your Coding Skills</div>
              </h1>
              <p className="lead my-4 text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <a href="pricing" className="btn btn-secondary btn-lg">
                Buy Now
              </a>
            </div>
          </Col>
          <Col className="col-md-5 text-center d-none d-md-block">
            <img src={coverImg} alt="ebook cover" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
