import { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Zmage from "react-zmage";

let id = 0;
export default class Portofolio extends Component {
  render() {
    if (!this.props.data) return null;

    const { portofolio } = this.props.data;

    const projects = portofolio.project.map((projects) => {
      let projectImage = "images/portofolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage src={projectImage} alt={projects.title} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });
    return (
      <section id="portofolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}
