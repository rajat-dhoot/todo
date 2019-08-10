import React from "react";
import PropTypes from "prop-types";

const Link = ({ children, active, onClick }) => {
   return (
      <button onClick={onClick} disabled={active} style={{ marginLeft: "4" }}>
         {children}
      </button>
   );
};

Link.propTypes = {
   children: PropTypes.node.isRequired,
   active: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Link;
