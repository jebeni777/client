import React from "react";
import 'typeface-roboto';

const EmptyLayout = props => {
  return <div style={{ height: "inherit" }}>{props.children}</div>;
};

export default EmptyLayout;
