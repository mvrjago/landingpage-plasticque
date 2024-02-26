import Carousel from "react-bootstrap/Carousel";
import clay from "../img/team/hanif.jpg";
import mvr from "../img/team/mario.jpg";
import miles from "../img/team/miles.png";
import abyna from "../img/team/abyna.jpg";
import riq4c from "../img/team/riq4c.jpg";
import subun from "../img/team/Subun.jpg";
import soze from "../img/team/sozetio.jpg";
import not from "../img/team/notyourguy.jpg";
import lonnete from "../img/team/lonette.jpg";
import Eja from "../img/team/Eja.jpg";
import wubby from "../img/team/wubby.jpg";

const Team = () => {
  return (
    <section id="team" className="Carcon">
      <h1 className="team-text has-text-weight-medium">Team</h1>
      <Carousel className="carcon1">
        <Carousel.Item>
          <div className="imgpos">
            <img src={clay} className="img-size" alt="Clay" />
            <Carousel.Caption className="cappos">
              <h1>Hanif</h1>
              <h2>Project Leader</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={mvr} className="img-size" alt="Mvrjago" />
            <Carousel.Caption className="cappos">
              <h1>Mario</h1>
              <h2>Project Manager</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={Eja} className="img-size" alt="Eja" />
            <Carousel.Caption className="cappos">
              <h1>Ravell</h1>
              <h2>Web Developer</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={lonnete} className="img-size" alt="Lonette" />
            <Carousel.Caption className="cappos">
              <h1>Andre</h1>
              <h2>UI/UX</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={miles} className="img-size" alt="Miles" />
            <Carousel.Caption className="cappos">
              <h1>Miles</h1>
              <h2>Finance</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={wubby} className="img-size" alt="Wubby" />
            <Carousel.Caption className="cappos">
              <h1>Rana</h1>
              <h2>Event Organizer</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={abyna} className="img-size" alt="Abyna" />
            <Carousel.Caption className="cappos">
              <h1>Abyna</h1>
              <h2>Copywriter</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={riq4c} className="img-size riq" alt="Riq4c" />
            <Carousel.Caption className="cappos">
              <h1>Riq4c</h1>
              <h2>Designer</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={subun} className="img-size" alt="Subun" />
            <Carousel.Caption className="cappos">
              <h1>Subun</h1>
              <h2>Socmed Specialist</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={soze} className="img-size" alt="Sozetio" />
            <Carousel.Caption className="cappos">
              <h1>Sozetio</h1>
              <h2>Internal Manager</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgpos">
            <img src={not} className="img-size" alt="Notyourguy" />
            <Carousel.Caption className="cappos">
              <h1>Notyourguy</h1>
              <h2>Partnership</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>

      <p className="footer-text has-text-white">
        <strong className="has-text-white">ⓒ PLASTICQUE.ID</strong> | All Rights
        reserved.
      </p>
    </section>
  );
};

export default Team;
