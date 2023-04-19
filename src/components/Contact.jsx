import React from "react";

export default function Contact(){
return (
<>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7983171821234!2d73.18070627438621!3d19.247619546564007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793ff4189b141%3A0x879826b6438773f!2sVarap%20Marathi%20School!5e0!3m2!1sen!2sin!4v1681931819452!5m2!1sen!2sin"
                        width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-lg-10 mb-5 mt-5">
                    <div className="container mx-5">
                        <div className="contact-form">
                            <h3>Get Connect With Me</h3>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <input type="text" name="fname" id="fname" className="fname"
                                            placeholder="First Name" />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <input type="text" name="lname" id="lname" className="lname"
                                            placeholder="Last Name" />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <input type="email" name="lname" id="lname" className="email"
                                            placeholder="Email" />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <input type="text" name="contact" id="contact" className="contact"
                                            placeholder="Contact" />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
}