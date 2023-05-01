import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
      <footer className="footer">
        <div className="footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 p-0">
                <div className="footer-widget-contact">
                  <div className="log">
                    <h2>News-Articals</h2>
                  </div>
                  <p className="white">Hello Guys!</p>
                  <Link
                    to="/contact"
                    className="btn btn__primary btn__primary-style2 btn__link"
                  >
                    <span className="white">Make Appointment</span>{" "}
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
                <div className="footer-widget-nav">
                  <h6 className="footer-widget__title white">Departments</h6>
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="white">
                          Latest
                        </a>
                      </li>
                      <li>
                        <a href="#" className="white">
                          Old
                        </a>
                      </li>
                      <li>
                        <a href="#" className="white">
                          Tranding
                        </a>
                      </li>
                      <li>
                        <a href="#" className="white">
                          Analysis
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-widget-nav">
                  <h6 className="footer-widget__title white">Links</h6>
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about" className="white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="footer-widget-nav">
                  <h6 className="footer-widget__title color-heading white">
                    Quick Contacts
                  </h6>
                  <ul className="contact-list list-unstyled">
                    <li className="white">
                      If you have any questions or need help, feel free to
                      contact with our team.
                    </li>
                    <li className="white">
                      <a href="tel:074004 60378" className="phone__number">
                        <i className="icon-phone"></i> <span>074004 60378</span>
                      </a>
                    </li>
                    <li className="color-body white">
                      VarapGoan, Kalyan-421301, Thane, Maharashtra, India
                    </li>
                  </ul>
                  <div className="d-flex align-items-center">
                    <Link
                      to="/contact"
                      className="btn btn__primary btn__link mr-30"
                    >
                      <i className="icon-arrow-right"></i>{" "}
                      <span className="white">Get Directions</span>
                    </Link>
                    <ul className="social-icons list-unstyled mb-0">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
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
              <div class="col-sm-12 col-md-12 col-lg-6 white">
                <span class="fz-14">&copy; All Rights Reserved.</span>{" "}
                <span class="creator">
                  Made With<span class="pink">❤ </span> By Hemant Konda
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
