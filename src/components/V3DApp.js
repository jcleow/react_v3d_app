import React from "react";

import * as v3dAppAPI from "../v3dApp/app.js";
import "../v3dApp/app.css";

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
      </div>
    );
  }
}

export default V3DApp;
