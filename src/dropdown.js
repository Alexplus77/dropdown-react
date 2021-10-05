import React from "react";
import'./main.css';
import ListDropDown from "./listDropDown";

function Dropdown ({onClick, listDropDown}){

    return(
        <div className="container">
            <div data-id="wrapper" className="dropdown-wrapper open">
                <button data-id="toggle" className="btn" onClick={onClick}>
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <ListDropDown listDropdown={listDropDown} />

            </div>
        </div>
                )
}

export default Dropdown;
