import "./sideBar.css";
import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

class App extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    spy3: {}
  };

  render() {
    return (
      <div className="app">


        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
        >
          <span className="app__toggle-text">Ethics</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content text_color_paragraph">
          Our platform dynamically assesses AI models and datasets with respect to fairness, bias, accountability, sustainability, ethics governance and policy directives.
           
            
          </div>
        </Collapse>

        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
          <span className="app__toggle-text">Security</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen2 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content text_color_paragraph">
          Our Platform assesses and remediates security gaps in client’s AI landscape. Our research-based AI red teaming engine deploys multiple advanced assessment techniques to identify AI vulnerabilities.
           </div>
        </Collapse>

        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen3
          })}
          onClick={() => this.toggle(3)}
        >
          <span className="app__toggle-text">Transparency</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen3 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content text_color_paragraph">
          Our platform does a deep dive technical analysis of clients’ AI landscape, with respect to interpretability and AI transparency. Our AI “Unboxing” technology helps in taking a deeper look at AI landscape to identify transparency gaps and risks and suggests remediation measures.
           </div>
        </Collapse>


        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen4
          })}
          onClick={() => this.toggle(4)}
        >
          <span className="app__toggle-text">Compliance</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen4 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen4 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content text_color_paragraph
          ">
Our platform reviews client’s AI landscape with respect to various standard compliance requirements or client compliance directives. This includes Data Privacy requirements as provided by regulations like GDPR, CCPA etc.

          
           </div>
        </Collapse>

      </div>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}

export default App;
