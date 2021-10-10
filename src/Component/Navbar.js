import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "../App.css";
import Icon from "./NewsIcon.png"
import MenuIcon from "@material-ui/icons/Menu";
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="navbar_div">
                <div className="row">
                    <div className="col col-md-4 ms-2 mt-2 mb-2 ms-3">
                        <div className="dropdown dropdown_div">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <MenuIcon/>
                            </button>
                            <ul className="dropdown-menu dropdown_list" aria-labelledby="dropdownMenuButton1">
                            <li><NavLink className="dropdown-item active" to="/">general</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/business">business</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/entertainment">entertainment</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/health">health</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/science">science</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/sports">sports</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/technology">technology</NavLink></li>
                               
                            </ul>
                        </div>
                      
                    </div>
                    <div className="col col-md-6 logo_div">
                        <img src={Icon} alt="logo" className="logo mt-2 mb-2" />
                        <span className="ms-2 text-dark">shorts</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
