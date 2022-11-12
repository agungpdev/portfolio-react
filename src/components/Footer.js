export default function Footer() {
    // const [years, setYears] = useState();
    // const getYears = () => setYears(new Date().getFullYear());

    // useEffect(()=>{
    //     getYears();
    // }, [])
  return (
      
    <>
      <footer>
        <section id="footer">
          <div className="container">
            <div className="footer-wrap ai-center">
              <div className="footer-brand">
                <a href="/">
                  <h2>Agung</h2>
                </a>
              </div>
              <div className="footer-sosmed">
                <a href="https://github.com/fadilgemilang" target="_blank" rel="noreferrer">
                  <i className="uil uil-github footer-icon"></i>
                </a>
                <a href="https://twitter.com/fadilgemilang" target="_blank" rel="noreferrer">
                  <i className="uil uil-twitter footer-icon"></i>
                </a>
                <a href="https://linkedin/in/agungperdana" target="_blank" rel="noreferrer">
                  <i className="uil uil-linkedin-alt footer-icon"></i>
                </a>
                <a href="https://instagram.com/fadilgemilang_" target="_blank" rel="noreferrer">
                  <i className="uil uil-instagram footer-icon"></i>
                </a>
              </div>
              <div className="footer-additional">
                <span>
                  &#169; 2022 - <span id="years"></span>, All right reserved by
                  Agung Perdana
                </span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
