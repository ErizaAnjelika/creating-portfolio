import { Component } from "react";
import { Fade } from "react-awesome-reveal";

export default class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    const { social } = this.props.data;
    const networks = social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
              <ul className="copyright">
                <li>&; Copyright 2024 eriza</li>
                <li>
                  Design by
                  <a href="http://www.styleshout.com/" title="Styleshout">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
