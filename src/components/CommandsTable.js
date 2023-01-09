import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
export default function CommandsTable() {
  // const [innerHtml, setInnerHtml] = useState('');
  const [searchText, setSearchText] = useState("");
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    let mounted = true;
    // getCommands();
    fetchCommands();
    return () => (mounted = false);
  }, [searchText]);

  const copyToClipboard = (id) => {
    console.log("id", id);
    var copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.innerText);
  };
  const fetchCommands = async () => {
    const response = await Axios.get(
      "http://127.0.0.1:8000/api/command/",
      {
        params: {
          searchText: searchText,
        },
      }
    );
    console.log(response.data.data, "is the data ");
    setCommands(response.data.success ? response.data.data.commands : []);
    console.log(commands.length, "is the length");
    // console.log(commands, "are the commands ");
  };

  const changeSearchText = (event) => {
    console.log(event.target.value, "is the search text value on change");
    setSearchText(event.target.value);
  };

  // const getCommands = (event) => {
  //     console.log("get commands is called ", event)
  //     // console.log(event)
  //     const apiCallHelper = (event) => {

  //         console.log("this function is setting inner html")
  //         Axios.get("https://a3harva.pythonanywhere.com/api/command/", { params: { searchText: event?event.target.value:"" } }).then((response) => {
  //             console.log(response.data)
  //             // console.log(event.target.value)
  //             let commands = response.data.data.commands
  //             console.log(commands, "commands")
  //             let tableBody = document.getElementById("tableBody")
  //             let tempInnerHtml = ""
  //             for (let i = 0; i < commands.length; i++) {
  //                 tempInnerHtml += `<tr>
  //                 <th scope="row">${i + 1}</th>
  //                 <td>${commands[i].name}</td>
  //                 <td id=cmd${i+1} onClick={() =&gt; copyToClipboard("cmd${i+1}")>${commands[i].text}</td>
  //                 <td  >${commands[i].description}</td>
  //                 <td>${commands[i].catagory}</td>
  //                 <td>${commands[i].updatedBy}</td>
  //             </tr>`
  //             }
  //             setInnerHtml(tempInnerHtml)
  //             console.log(tempInnerHtml, "is temp inner html")
  //             console.log("we set teh state with inner html as !", innerHtml)
  //             tableBody.innerHTML = tempInnerHtml
  //         })
  //     }
  //     setTimeout(apiCallHelper(event), 3000);

  // }
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
        <table className="table table-dark">
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
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{command.name}</td>
                <td onClick={() => copyToClipboard(i + 1)}>{command.text}</td>
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
    </div>
  );
}
