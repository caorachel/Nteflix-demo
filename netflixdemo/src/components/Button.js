import React from "react";

function Button({ onclick, children }) {
  return (
    <button className="btn" onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
