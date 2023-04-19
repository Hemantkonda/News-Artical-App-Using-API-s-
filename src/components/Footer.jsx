import React from "react";

export default function Footer(){
    return (
      <footer class="footer">
        <div class="footer-primary">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-3 p-0">
                <div class="footer-widget-contact">
                  <div className="log">
                    <h2>MyNews</h2>
                  </div>
                  <p class="white">
                    Our goal is to deliver quality of care in a courteous,
                    respectful, and compassionate manner. We hope you will allow
                    us to care for you and strive to be the first and best
                    choice for your family healthcare.
                  </p>
                  <a
                    href="#"
                    class="btn btn__primary btn__primary-style2 btn__link"
                  >
                    <span className="white">Make Appointment</span>{" "}
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
                <div class="footer-widget-nav">
                  <h6 class="footer-widget__title white">Departments</h6>
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" className="white">Latest</a>
                      </li>
                      <li>
                        <a href="#" className="white">Old</a>
                      </li>
                      <li>
                        <a href="#" className="white">Tranding</a>
                      </li>
                      <li>
                        <a href="#" className="white">Analysis</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-2">
                <div class="footer-widget-nav">
                  <h6 class="footer-widget__title white">Links</h6>
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="about-us.html" className="white">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html" className="white">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="footer-widget-nav">
                  <h6 class="footer-widget__title color-heading white">
                    Quick Contacts
                  </h6>
                  <ul class="contact-list list-unstyled">
                    <li className="white"> 
                      If you have any questions or need help, feel free to
                      contact with our team.
                    </li>
                    <li className="white">
                      <a href="tel:074004 60378" class="phone__number">
                        <i class="icon-phone"></i> <span>074004 60378</span>
                      </a>
                    </li>
                    <li class="color-body white">
                      plot no. 26, Dosti Heritage, sector no 4, Karanjade,
                      Panvel, Navi Mumbai, Maharashtra 410206
                    </li>
                  </ul>
                  <div class="d-flex align-items-center">
                    <a
                      href="contact-us.html"
                      class="btn btn__primary btn__link mr-30"
                    >
                      <i class="icon-arrow-right"></i>{" "}
                      <span className="white">Get Directions</span>
                    </a>
                    <ul class="social-icons list-unstyled mb-0">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-secondary">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-6 col-lg-6 white">
                <span class="fz-14">&copy; All Rights Reserved.</span>{" "}
                <span class="creator">
                  Made With<span class="pink">❤ </span> In Nexmoves
                </span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <nav>
                  <ul class="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end mb-0">
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Cookies</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}