import React from "react";

import "../css/LearnMorePage.css";

const LearnMorePage = (props) => {
  return (
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-12">
          <h2 class="font-300">How It Works?</h2>
          <p class="text-muted mt-4 title-subtitle mx-auto">
            It is a long established fact that a reader will be of a page when
            established fact looking at its layout.
          </p>
        </div>
      </div>
      <div class="timeline-page mt-5">
        <div class="timeline-item">
          <div class="row">
            <div class="col-lg-6">
              <div class="duration date-label-left">
                <img
                  src="https://themesdesign.in/landsay/images/how-it-1.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="works works-description-right">
                <h4>Tell us your idea</h4>
                <p class="timeline-subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis,
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="row">
            <div class="col-lg-6">
              <div class="works works-description-left">
                <h4>Debut with users</h4>
                <p class="timeline-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  lacinia magna vel molestie faucibus. Donec auctor et urnaLorem
                  ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="duration duration-right ">
                <img
                  src="https://themesdesign.in/landsay/images/how-it-2.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="row">
            <div class="col-lg-6">
              <div class="duration date-label-left">
                <img
                  src="https://themesdesign.in/landsay/images/how-it-3.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="works works-description-right">
                <h4>Research and Develop</h4>
                <p class="timeline-subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;
