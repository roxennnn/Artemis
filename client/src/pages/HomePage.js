import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import "../css/HomePage.css";

const HomePage = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* <h1 className="text-center">Work Your Freedom</h1> */}
          <img
            src={logo}
            className="App-logo rounded mx-auto d-block"
            alt="logo"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fermentum metus in tempus eleifend. Sed neque elit, feugiat quis
            metus ut, aliquam bibendum tellus. Quisque vitae aliquam diam. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Phasellus fermentum nisl
            eget neque placerat tincidunt. Maecenas efficitur accumsan
            vulputate. Sed gravida risus quis mi aliquam condimentum. Quisque
            feugiat, enim at sollicitudin aliquam, enim magna vehicula diam, ac
            laoreet justo nulla non enim. Vivamus malesuada pharetra eros non
            condimentum. Nam placerat ipsum turpis, eget molestie nulla
            venenatis ut. Donec posuere et eros in molestie. Vestibulum
            tincidunt pharetra porttitor.
          </p>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row lg={3}>
        <Col></Col>
        <div className="center-col col">
          <a
            className="btn-radius btn btn-danger btn-lg"
            role="button"
            href="/learn-more"
          >
            Learn More
          </a>
        </div>
        <Col></Col>
      </Row>
      <div className="container loginbuttons">
        <Row md={4}>
          <Col></Col>
          <div className="center-col col">
            <a
              className="btn-radius btn btn-success btn-lg"
              role="button"
              href="/signup"
            >
              Sign Up
            </a>
          </div>
          <div className="center-col col">
            <a
              className="btn-radius btn btn-primary btn-lg"
              role="button"
              href="/login"
            >
              Log In
            </a>
          </div>
          <Col></Col>
        </Row>
      </div>
      <main>
        <div class="container">
          <h3 class="card-title">Timeline Style : Demo-1</h3>
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline">
                <a href="#" class="timeline">
                  <div class="timeline-icon">
                    <i class="fa fa-globe"></i>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">2018</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
                <a href="#" class="timeline">
                  <div class="timeline-icon">
                    <i class="fa fa-rocket"></i>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">2015</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
                <a href="#" class="timeline">
                  <div class="timeline-icon">
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">2012</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
                <a href="#" class="timeline">
                  <div class="timeline-icon">
                    <i class="fa fa-mobile"></i>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">2009</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cupiditate ducimus officiis quod! Aperiam eveniet nam
                      nostrum odit quasi ullam voluptatum.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h3 class="card-title">Timeline Style : Demo-2</h3>
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline2">
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2018</span>
                    <div class="inner-content">
                      <h3 class="title">Web Designer</h3>
                      <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a
                        orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2017</span>
                    <div class="inner-content">
                      <h3 class="title">Web Developer</h3>
                      <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a
                        orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2016</span>
                    <div class="inner-content">
                      <h3 class="title">Web Designer</h3>
                      <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a
                        orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <span class="year">2015</span>
                    <div class="inner-content">
                      <h3 class="title">Web Developer</h3>
                      <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a
                        orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h3 class="card-title">Timeline Style : Demo-3</h3>
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline3">
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">2018</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Web Desginer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                      Vivamus sem erat.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">2017</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Web Developer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                      Vivamus sem erat.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">2016</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Web Desginer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                      Vivamus sem erat.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">2015</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Web Developer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                      Vivamus sem erat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h3 class="card-title">Timeline Style : Demo-4</h3>
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline4">
                <div class="timeline">
                  <span class="timeline-icon"></span>
                  <span class="year">2017</span>
                  <div class="timeline-content">
                    <h3 class="title">Web Desginer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus mattis justo id pulvinar suscipit. Pellentesque
                      rutrum vehicula erat sed dictum. Integer quis turpis
                      magna. Suspendisse tincidunt elit at erat tincidunt, vel
                      vulputate arcu dapibus. Etiam accumsan ornare posuere.
                      Nullam est.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <span class="timeline-icon"></span>
                  <span class="year">2016</span>
                  <div class="timeline-content">
                    <h3 class="title">Web Developer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus mattis justo id pulvinar suscipit. Pellentesque
                      rutrum vehicula erat sed dictum. Integer quis turpis
                      magna. Suspendisse tincidunt elit at erat tincidunt, vel
                      vulputate arcu dapibus. Etiam accumsan ornare posuere.
                      Nullam est.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <span class="timeline-icon"></span>
                  <span class="year">2015</span>
                  <div class="timeline-content">
                    <h3 class="title">Web Desginer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus mattis justo id pulvinar suscipit. Pellentesque
                      rutrum vehicula erat sed dictum. Integer quis turpis
                      magna. Suspendisse tincidunt elit at erat tincidunt, vel
                      vulputate arcu dapibus. Etiam accumsan ornare posuere.
                      Nullam est.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <span class="timeline-icon"></span>
                  <span class="year">2014</span>
                  <div class="timeline-content">
                    <h3 class="title">Web Developer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus mattis justo id pulvinar suscipit. Pellentesque
                      rutrum vehicula erat sed dictum. Integer quis turpis
                      magna. Suspendisse tincidunt elit at erat tincidunt, vel
                      vulputate arcu dapibus. Etiam accumsan ornare posuere.
                      Nullam est.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default HomePage;
