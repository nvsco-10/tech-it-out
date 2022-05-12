import React from "react";
import "../css/header.scss";
import "@fontsource/roboto";

export default function Signout() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="end">
      <button
        onClick={logout}
        className="button has-text-white"
      >
        SIGN OUT
      </button>
    </div>
  );
}
