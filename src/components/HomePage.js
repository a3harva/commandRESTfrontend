import React from "react";
import "../index.css";
export default function HomePage(
  props = { commandGuruTextStyle: "font-family: Times New Roman" }
) {
  return (
    <div>
      <div className="card text-center text-white table-dark-custom   mb-3">
        <div className="card-header">Hello User!</div>
        <div className="card-body table-dark-custom">
          <h5 className="card-title">
            This is home page for{" "}
            <p style={props.commandGuruTextStyle}>CommandGuru app!</p>{" "}
          </h5>
          <p className="card-text">
            We support fetching and copying command directly from browser!
          </p>
          <a href="/commands" className="btn btn-primary mx-3">
            View Commands
          </a>
          <a href="/commands" className="btn btn-primary mx-3">
            Add a Commands
          </a>
          <a href="/commands" className="btn btn-primary mx-3">
            Other features{" "}
          </a>
        </div>
        <div className="card-footer table-dark-custom text-muted"></div>
      </div>
    </div>
  );
}
