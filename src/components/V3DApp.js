import React from "react";
import Button from "react-bootstrap/Button";
import * as v3dAppAPI from "../v3dApp/app.js";
import "../v3dApp/app.css";

const Header = () => {
  return (
    <div className="sidebar">
      <div class="d-flex flex-column">
        <Button className="p-2 w-50">Show Annotation </Button>
        <Button className="p-2 w-50">Hide Annotation </Button>
        <Button className="p-2 w-50">Show more Details </Button>
      </div>
    </div>
  );
};
class V3DApp extends React.Component {
  #app = null;

  componentDidMount() {
    v3dAppAPI.createApp().then((app) => {
      this.#app = app;
    });
  }

  componentWillUnmount() {
    if (this.#app !== null) {
      this.#app.dispose();
      this.#app = null;
    }
  }

  render() {
    return (
      <div id={v3dAppAPI.CONTAINER_ID}>
        <div
          id="fullscreen_button"
          className="fullscreen-button fullscreen-open"
          title="Toggle fullscreen mode"
        ></div>
        <Header />
      </div>
    );
  }
}

export default V3DApp;
