import freelance from '../assets/images/freelancer.png';
export default function Header() {
  return (
    <>
      <header id="header">
        <section className="navbar">
          <div className="container">
            <div className="navbar-wrap">
              <div className="navbar-wrap-left">
                <div className="navbar-wrap-left-brand">
                  <a href="/">
                    <h1>
                      A<span>gung</span>
                    </h1>
                  </a>
                </div>
                <nav className="navbar-wrap-left-menu">
                  <ul className="navbar-wrap-left-menu-list">
                    <li className="navbar-wrap-left-menu-list-item">
                      <a href="/" className="link-item">
                        Home
                      </a>
                    </li>
                    <li className="navbar-wrap-left-menu-list-item">
                      <a href="/" className="link-item">
                        About
                      </a>
                    </li>
                    <li className="navbar-wrap-left-menu-list-item">
                      <a href="/" className="link-item">
                        Services
                      </a>
                    </li>
                    <li className="navbar-wrap-left-menu-list-item">
                      <a href="/" className="link-item">
                        Portfolio
                      </a>
                    </li>
                    <li className="navbar-wrap-left-menu-list-item">
                      <a href="/" className="link-item">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-wrap-right">
                <div className="navbar-wrap-right-sosmed">
                  <a
                    href="https://dribbble.com/fadilgemilang"
                    target="_blank"
                    className="link-icon"
                    rel="noreferrer"
                  >
                    <i className="uil uil-dribbble navbar-icon"></i>
                  </a>
                  <a
                    href="https://twitter.com/fadilgemilang"
                    target="_blank"
                    className="link-icon"
                    rel="noreferrer"
                  >
                    <i className="uil uil-twitter navbar-icon"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/agungperdana"
                    target="_blank"
                    className="link-icon"
                    rel="noreferrer"
                  >
                    <i className="uil uil-linkedin-alt navbar-icon"></i>
                  </a>
                  <a
                    href="https://instagram.com/fadilgemilang_"
                    target="_blank"
                    className="link-icon"
                    rel="noreferrer"
                  >
                    <i className="uil uil-instagram navbar-icon"></i>
                  </a>
                </div>
                <div className="navbar-wrap-right-cta">
                  <a href="/" className="btn btn-line btn-cta">
                    Lets Talk
                  </a>
                </div>
                <div className="toggle-navbar">
                  <i className="uil uil-bars toggle-navbar-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nav-mobile">
          <aside className="nav-mobile-wrap">
            <div className="close-menu">
              <i className="uil uil-times mobile-close-icon"></i>
            </div>
            <ul className="mobile-menu">
              <li className="mobile-menu-item">Home</li>
              <li className="mobile-menu-item">About</li>
              <li className="mobile-menu-item">Service</li>
              <li className="mobile-menu-item">Portfolio</li>
              <li className="mobile-menu-item">Contact</li>
            </ul>
          </aside>
        </section>
        <div className="overlay-mobile"></div>
        <section className="hero">
          <div className="container">
            <div className="hero-wrap">
              <div className="row ai-center">
                <div className="col6 col12-medium">
                  <div className="hero-left">
                    <span className="hero-subtitle slide-right">
                      freelancer web developer
                    </span>
                    <div className="spacer20"></div>
                    <h1 className="hero-title slide-left">
                      Hello, I'm <span>Agung</span> Welcome to my World.
                    </h1>
                  </div>
                </div>
                <div className="col6 col12-medium">
                  <div className="hero-right slide-right">
                    <img
                      src={freelance}
                      alt="freelance"
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="firstspacer"></div>
        </section>
      </header>
    </>
  );
}
