import React from 'react'

export default function HomePage(props={commandGuruTextStyle:"font-family: Times New Roman"}) {
    
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Hello User!
                </div>
                <div className="card-body">
                    <h5 className="card-title">This is home page for <p style={props.commandGuruTextStyle}>CommandGuru app!</p> </h5>
                    <p className="card-text">We support fetching and copying command directly from browser!</p>
                    <a href="/commands" className="btn btn-primary">View Commands</a>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div>
    )
}
