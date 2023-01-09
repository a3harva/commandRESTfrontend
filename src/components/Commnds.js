import React from "react";
import CommandsTable from "./CommandsTable";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Commands() {
  console.log("this is commands route");
  return (
    <div>
      <Navbar />
      <CommandsTable />
      <Footer />
    </div>
  );
}
