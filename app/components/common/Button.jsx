import React from "react";

function Button({ children, className, onClick }) {
  return (
    <button
      className={`px-[14px] py-[12px] rounded-[8px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
