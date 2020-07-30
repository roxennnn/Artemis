import React from "react";

import "../css/ConsultDatabasePage.css";

const ConsultDatabasePage = (props) => {
  return (
    <div class="content">
      <h1>TODO</h1>
      {/* <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card-box">
              <div class="row">
                <div class="col-lg-6 col-xl-6">
                  <h4 class="header-title m-b-30">My Files</h4>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/pdf.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0">
                        <small>568.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/bmp.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Bmpfile.bmp</h5>
                      <p class="mb-0">
                        <small>845.8 mb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/psd.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Photoshop_file.ps</h5>
                      <p class="mb-0">
                        <small>684.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/avi.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Avifile.avi</h5>
                      <p class="mb-0">
                        <small>5.9 mb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/cad.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Cadfile.cad</h5>
                      <p class="mb-0">
                        <small>95.8 mb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/txt.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Mytextfile.txt</h5>
                      <p class="mb-0">
                        <small>568.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/eps.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Epsfile.eps</h5>
                      <p class="mb-0">
                        <small>568.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/dll.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Project_file.dll</h5>
                      <p class="mb-0">
                        <small>684.3 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/sql.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Website_file.sql</h5>
                      <p class="mb-0">
                        <small>457.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/zip.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0">
                        <small>568.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/ps.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0">
                        <small>568.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box">
                    <a href="" class="file-close">
                      <i class="fa fa-times-circle"></i>
                    </a>
                    <div class="file-img-box">
                      <img
                        src="https://coderthemes.com/highdmin/layouts/light/assets/images/file_icons/png.svg"
                        alt="icon"
                      />
                    </div>
                    <a href="#" class="file-download">
                      <i class="fa fa-download"></i>
                    </a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0">
                        <small>568.8 kb</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <button
                  type="button"
                  class="btn btn-outline-danger w-md waves-effect waves-light"
                >
                  <i class="mdi mdi-refresh"></i> Load More Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ConsultDatabasePage;
