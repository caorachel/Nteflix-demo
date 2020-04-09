import React, { Fragment } from "react";

function Button({ onclick, children }) {
  return (
    <Fragment>
      <button className="btn" onClick={onclick}>
        {children}
      </button>
    </Fragment>
  );
}

export default Button;
