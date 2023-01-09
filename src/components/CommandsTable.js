import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react';
export default function CommandsTable() {

    const [innerHtml, setInnerHtml] = useState('');
    const [searchText, setsearchText] = useState('');

    useEffect(() => {
        let mounted = true;
        getCommands();

        
        

        
        return () => mounted = false;


    }, [])

    const copyToClipboard = (id) =>{
        console.log("id",id)
        var copyText = document.getElementById(id);
        navigator.clipboard.writeText(copyText.innerText);
    }



    const getCommands = (event) => {
        console.log("get commands is called ", event)
        // console.log(event)
        const apiCallHelper = (event) => {
            
            console.log("this function is setting inner html")
            Axios.get("https://a3harva.pythonanywhere.com/api/command/", { params: { searchText: event?event.target.value:"" } }).then((response) => {
                console.log(response.data)
                // console.log(event.target.value)
                let commands = response.data.data.commands
                console.log(commands, "commands")
                let tableBody = document.getElementById("tableBody")
                let tempInnerHtml = ""
                for (let i = 0; i < commands.length; i++) {
                    tempInnerHtml += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${commands[i].name}</td>
                    <td id=cmd${i+1} onClick={() =&gt; copyToClipboard("cmd${i+1}")>${commands[i].text}</td>
                    <td  >${commands[i].description}</td>
                    <td>${commands[i].catagory}</td>
                    <td>${commands[i].updatedBy}</td>
                </tr>`
                }
                setInnerHtml(tempInnerHtml)
                console.log(tempInnerHtml, "is temp inner html")
                console.log("we set teh state with inner html as !", innerHtml)
                tableBody.innerHTML = tempInnerHtml
            })
        }
        setTimeout(apiCallHelper(event), 3000);

        

    }
    return (
        <div>
            <div className="input-group rounded">
                <form>
                    <input type="search" onChange={(event) => getCommands(event)} className="form-control rounded" placeholder="Search Commands by typing!" aria-label="Search" aria-describedby="search-addon" />
                </form>
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col" onClick={() => copyToClipboard("django")}>Name</th>
                        <th scope="col">Text</th>
                        <th scope="col">Description</th>
                        <th scope="col">Catagory</th>
                        <th scope="col">Updated By</th>
                    </tr>
                </thead>
                <tbody id="tableBody"></tbody>
            </table>
        </div>
    )
}
