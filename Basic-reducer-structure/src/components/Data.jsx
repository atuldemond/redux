import React from "react";
import { createStore } from "redux";
import Script from "../store/Script";

const Data = () => {
  return (
    <div className="w-[80vw] m-auto bg-red-100 h-screen px-[2vw] py-[2vh]">
      <div className="homepage text-5xl">Data</div>
      <Script />
    </div>
  );
};

export default Data;
