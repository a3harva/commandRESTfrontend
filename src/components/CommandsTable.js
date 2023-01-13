import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import "../index.css";
import URLS from "../../src/Urls";

export default function CommandsTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [commands, setCommands] = useState([]);
  const [TOTAL_PAGES, setTotalPages] = useState(1);
  const [TOTAL_PAGES_ARRAY, setTotalPagesArray] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchCommands();
    setTotalPagesArray(
      Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1)
    );
    return () => (mounted = false);
  }, [searchText, pageNumber, TOTAL_PAGES]);

  const copyToClipboard = (id) => {
    console.log("id", id);
    var copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.innerText);
  };
  const fetchCommands = async () => {
    let params = {};
    if (searchText) {
      params.searchText = searchText;
    }
    params.pageNumber = pageNumber;
    console.log(URLS, " are the urls in  the urls file ");
    const response = await Axios.get(URLS.GET_COMMANDS, {
      params: params,
    });
    console.log(response.data.data, "is the data ");
    setCommands(response.data.success ? response.data.data.commands : []);
    setTotalPages(response.data.success ? response.data.data.totalPages : 0);
    console.log(TOTAL_PAGES, "TOTAL_PAGES");
    // console.log(commands, "are the commands ");

    console.log(TOTAL_PAGES_ARRAY);
  };

  const changeSearchText = (event) => {
    console.log(event.target.value, "is the search text value on change");
    setSearchText(event.target.value);
  };

  const handleNext = () => setPageNumber((prevState) => prevState + 1);
  const handlePrev = () => setPageNumber((prevState) => prevState - 1);

  return (
    <div>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="search"
                className="form-control form-input"
                onChange={(event) => changeSearchText(event)}
                placeholder="Search commands..."
              />
              <span className="left-pan">
                <i className="fa fa-microphone"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {commands.length > 0 ? (
        <table className="table table-dark table-dark-custom">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col" onClick={() => copyToClipboard("django")}>
                Name
              </th>
              <th scope="col">Text</th>
              <th scope="col">Description</th>
              <th scope="col">Catagory</th>
              <th scope="col">Updated By</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {commands.map((command, i) => (
              <tr key={Math.random()}>
                <th scope="row">{i + 1}</th>
                <td>{command.name}</td>
                <td id={i + 1} onClick={() => copyToClipboard(i + 1)}>
                  {command.text}
                </td>
                <td>{command.description}</td>
                <td>{command.catagory}</td>
                <td>{command.updatedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <div className="card text-center text-white   bg-dark mb-3">
            <div className="card-header">Oops!</div>
            <div className="card-body">
              <h5 className="card-title">
                It appears that there are no commands for your query!{" "}
              </h5>
              <p className="card-text">
                You can try searching with a different query for now ;)
              </p>
              <a href="/commands" className="btn btn-primary">
                Reset search
              </a>
            </div>
            <div className="card-footer text-muted"></div>
          </div>
        </div>
      )}

      {commands.length > 0 ? (
        <div>
          <nav className="table-dark-custom" aria-label="...">
            <ul className="pagination">
              <li className="page-item">
                <p
                  className={`page-link ${
                    pageNumber === 1 ? "disabled-paragraph" : ""
                  }`}
                  onClick={handlePrev}
                >
                  Previous
                </p>
              </li>
              {TOTAL_PAGES_ARRAY.map((index) => (
                <li
                  className={`page-item ${
                    index === pageNumber ? "active" : ""
                  }`}
                >
                  <p
                    className="page-link"
                    onClick={() => {
                      setPageNumber(index);
                    }}
                  >
                    {index} <span className="sr-only">(current)</span>
                  </p>
                </li>
              ))}
              {/* <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li> */}
              <li className="page-item">
                <p
                  className={`page-link ${
                    pageNumber === TOTAL_PAGES ? "disabled-paragraph" : ""
                  }`}
                  onClick={handleNext}
                >
                  Next
                </p>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
