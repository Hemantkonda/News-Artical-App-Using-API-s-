import React from "react";
import Image from "../assets/images/myimg.jpeg"

export default function About(){
    return (
      <>
        <section className="mb-5">
          <div className="container">
          <h1>About Me</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 bg">
                <div className="row">
                  <div className="col-lg-6">
                    <span className="fs-bold">Name:</span>{" "}
                    <span>Hemant Konda</span>
                    <br />
                    <span className="fs-bold">Contact:</span>{" "}
                    <span>+91 7304840591</span>
                    <br />
                    <span className="fs-bold">Email:</span>{" "}
                    <span>
                      <a
                        href="mailto:hemanthkon0591@gmail.com"
                        className="mail"
                      >
                        hemanthkon0591@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <h6> Bachelor's Degree in Information Technology </h6>
                    <p>[University Of Mumbai] [2019-2022]</p>
                  </div>
                </div>
                <div className="summary">
                  <h5>Profile</h5>
                  <p>
                    As a highly motivated and skilled Junior Front-end Developer
                    with 1 year of experience, I am proficient in HTML, CSS,
                    JavaScript, and React.js. I also have hands-on experience
                    with PHP frameworks such as CodeIgniter, along with
                    PHPMyAdmin and SQL. My strong curiosity to learn and improve
                    my skills has enabled me to stay updated with the latest web
                    development trends and best practices.
                  </p>
                </div>
                <div className="skills">
                  <h5>Skills</h5>
                  <ul className="skill-list">
                    <li>
                      Front-end Development: HTML5, CSS3, JavaScript, React.js
                    </li>
                    <li>
                      Back-end Development: PHP, CodeIgniter, PHPMyAdmin, SQL
                    </li>
                    <li>Version Control: Git</li>
                    <li>Responsive Web Design: Bootstrap, Tailwind Css</li>
                    <li>Cross-Browser Compatibility</li>
                    <li>Debugging and Troubleshooting</li>
                    <li>Agile Development Methodology</li>
                    <li>Strong Communication Skills</li>
                  </ul>
                </div>
                <div className="experince">
                  <h5> Work Experience:</h5>
                  <h6>Junior Front-end Developer</h6>
                  <h6>Nexmove Solutions</h6>
                  <h6>01 June 2022</h6>
                  <ul className="exp-list">
                    <li>
                      Collaborated with cross-functional teams to develop and
                      implement web applications using HTML, CSS, JavaScript,
                      and React.js.
                    </li>
                    <li>
                      Assisted in troubleshooting and bug fixing, ensuring
                      smooth functionality of web applications.
                    </li>
                    <li>
                      Developed and maintained PHP-based web applications using
                      CodeIgniter, PHPMyAdmin, and SQL.
                    </li>
                    <li>
                      Contributed to responsive web design and ensured
                      cross-browser compatibility.
                    </li>
                    <li>
                      Actively participated in Agile development methodologies,
                      attending team meetings and providing feedback on project
                      progress.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="image">
                  <img src={Image} alt="" className="myimg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}