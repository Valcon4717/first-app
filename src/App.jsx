import React, { Component } from "react";

class NavBar extends Component{
    render() {
        //Can only return one container
        return (
            // <div>
            //     <h1>Hello</h1>
            //     <p>paragraph</p>
            // </div>

            //React.Fragment acts as a container for both tags without rendering html in the DOM
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                    <a className="navbar-brand" href="/#">MyApp</a>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Home</a>
                            </li>
                        </ul>
                    </div>
                </nav>               
            </React.Fragment>           
        )    
    }
}

//use export so the className can be accessed from other classNamees
export default NavBar;