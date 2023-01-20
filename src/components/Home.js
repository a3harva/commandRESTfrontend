import React from "react";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Filler from "./Filler";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Filler />
      <Footer />
      {/* <InlineTypedData/> */}
    </>
  );
}
