import about from '../assets/images/about.jpg';
export default function About() {
  return (
    <>
      <section id="about">
        <div className="firstspacer"></div>
        <div className="container">
          <div className="about-wrap">
            <div className="row ai-center">
              <div className="col5 col12-desktop">
                <div className="about-left">
                  <img
                    src={about}
                    alt="about"
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="col7 col12-desktop">
              <div className="about-right">
                <div className="about-desc">
                  <h2 className="title-section about-title">About Me</h2>
                  <div className="spacer20"></div>
                  <p className="paragraph p-about">
                    Saya adalah seorang frontend web developer yang
                    berorientasi belajar terus terhadap perkembangan teknologi
                    dengan pengalaman +1 tahun menggunakan laravel,
                    codeigniter, dan javascript. Untuk meningkatkan kualitas
                    diri saya, saya mengikuti banyak kursus pemrograman
                    diantaranya Frontend Web Developer, Pemrograman
                    Javascript, Pemrograman PHP, Devops dan Backend Developer.
                  </p>
                </div>
                <div className="spacer20"></div>
                <div className="about-menu">
                  <input type="radio" name="content" id="skills" defaultChecked/>
                  <input type="radio" name="content" id="experience"/>
                  <input type="radio" name="content" id="education"/>
                  <input type="radio" name="content" id="certification"/>
                  <nav className="menu-about">
                    <label htmlFor="skills" className="about-menu-tab">Main Skills</label>
                    <label htmlFor="experience" className="about-menu-tab">Experience</label>
                    <label htmlFor="education" className="about-menu-tab">Education</label>
                    <label htmlFor="certification" className="about-menu-tab">Certification</label>
                  </nav>
                  <div className="tab-content">
                    <div className="spacer20"></div>
                    <div className="content1">
                      <div className="tab-item">
                        <a href="https://dribbble.com/fadilgemilang" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Web User Interface Design <span>- Web Design</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">Delight the user and make it work.</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://github.com/fadilgemilang" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            HTML5, CSS3, SASS<span>- Frontend Developer</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">Turn the design into code</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://github.com/fadilgemilang" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            PHP Programming <span>- Web Development</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">Frontend and backend built with php programming</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://github.com/fadilgemilang" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Javascript <span>- Frontend Developer</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">Make the website more interactive with users</span>
                      </div>
                    </div>
                    <div className="content2">
                      <div className="tab-item">
                        <a href="/" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Wira Penjualan <span>- Mayangkara Group</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2018 - 2019</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="/" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Production Operator<span>- Globalindo One Solution</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">Feb 2019 - Jul 2019</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://fiver.com/fadilgemilang" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Web Development <span>- Freelancer</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2022 - Current</span>
                      </div>
                    </div>
                    <div className="content3">
                      <div className="tab-item">
                        <a href="/" target="_blank">
                          <h5 className="tab-content-title">
                            Computer Network Engineering
                            <span>- SMK Wiyata Mandala</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2014 - 2017</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://home.amikom.ac.id/" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Computer Science / Informatics<span>- Amikom University</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2019 - 2022</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://www.dicoding.com/users/fadilgemilang" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Frontend Developer <span>- Dicoding</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">Jul 2022 - Sept 2022</span>
                      </div>
                    </div>
                    <div className="content4">
                      <div className="tab-item">
                        <a href="https://drive.google.com/file/d/1myc6krclnDOjt6jPjya93DHdm5-rdgpS/" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            IT Essentials: PC Hardware and Software
                            <span>- Cisco</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2020 - forever</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://www.credly.com/badges/30a0b78c-df4a-4d92-af62-612d56f1887e/linked_in_profile"
                          target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            CCNA: Introduction to Networks<span>- Cisco</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2020 - forever</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://www.dicoding.com/certificates/1OP85LRV2PQK" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            AWS Cloud <span>- Dicoding</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2022 - 2025</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://www.dicoding.com/certificates/81P281G5YPOY" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Web Programming <span>- Dicoding</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2022 - 2025</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://www.dicoding.com/certificates/81P2G94RYPOY" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Javascript Programming <span>- Dicoding</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2022 - 2025</span>
                      </div>
                      <div className="spacer10"></div>
                      <div className="tab-item">
                        <a href="https://www.dicoding.com/certificates/EYX49R2QRPDL" target="_blank" rel="noreferrer">
                          <h5 className="tab-content-title">
                            Frontend Web <span>- Dicoding</span>
                          </h5>
                        </a>
                        <span className="tab-content-subtitle">2022 - 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
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
