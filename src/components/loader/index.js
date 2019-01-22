import React from "react";
import loaderSrc from "../../assets/loader.gif";

const loader = props => (
  <div>
    <img style={{ width: 75 }} src={loaderSrc} alt="loader_icon" />
  </div>
);

export default loader;
