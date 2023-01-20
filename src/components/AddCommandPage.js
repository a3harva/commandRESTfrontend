import React from "react";
// import CommandsTable from "./CommandsTable";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AddCommandPage() {
  console.log("this is commands route");
  return (
    <div>
      <Navbar />
      <div className="container">
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              className="form-control disabled "
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="atharwajoshi@gmail.com"
              value="atharwajoshi@gmail.com"
              readonly
            />
            <small id="emailHelp" className="form-text text-muted">
              Note : this is
            </small>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter Name of the command"
            />
            <small id="nameHelp" className="form-text form-label">
              Name should be descriptive and short, e.g. git config
            </small>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="commandText">
              Text of the command
            </label>
            <input
              type="email"
              className="form-control"
              id="commandText"
              aria-describedby="commandHelp"
              placeholder="Enter command text"
            />
            <small id="commandHelp" className="form-text form-label">
              Exact text of the command , e.g. python manage.py createsupseruser
            </small>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="commandDesc"
              placeholder="Enter command description"
            />
            <small id="commandDesc" className="form-text form-label">
              Explain with searchable words what the command does , e.g. Creates
              a super user in django project
            </small>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="pin">
              Pin
            </label>
            <input
              type="password"
              className="form-control"
              id="pin"
              placeholder="Pin"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="checkBox" />
            <label className="form-check-label form-label" htmlFor="checkBox">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
