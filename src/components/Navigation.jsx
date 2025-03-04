import React from "react";

const Navigation = ({ src, nav }) => {
  return (
    <div>
      <button className="px-3 flex gap-4">
        <img src={src} alt="" />
        <span>{nav}</span>
      </button>
    </div>
  );
};

export default Navigation;
