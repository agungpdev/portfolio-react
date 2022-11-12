import contactImage from '../assets/images/contactus.png'
export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="firstspacer"></div>
        <div className="container">
          <div className="contact-wrap">
            <div className="row ai-center col-rotate">
              <div className="col6 col12-laptop">
                <div className="contact-left">
                  <div className="contact-title">
                    <h2 className="title-section contact-title-text">Hire Me</h2>
                    <div className="spacer20"></div>
                    <p className="subtitle-section contact-subtitle">
                      I am available for freelance work. Connect with me via
                      instagram: <span>@fadilgemilang_</span> or email:
                      <span>myagungperdana@.com</span> Thank you for your
                      message. It has been sent.
                    </p>
                  </div>
                  <div className="spacer40"></div>
                  <form action="">
                    <div className="form-group form1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group form2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group form3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject example web development"
                      />
                    </div>
                    <div className="form-group form4">
                      <textarea
                        name=""
                        id=""
                        rows="10"
                        placeholder="Your Message"
                        className="form-control"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary contact-button"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col6 col12-laptop">
                <div className="contact-right">
                  <img
                    src={contactImage}
                    alt=""
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="firstspacer"></div>
      </section>
    </>
  );
}
