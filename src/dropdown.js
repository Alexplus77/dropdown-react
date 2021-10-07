import React from "react";
import DropDownList from "./dropdownlist";
import('./main.css')

    const DropDown=({openDropDown, listDropDown, isOpen, isActive, activeList})=>{

    return (<div className="container">
        <div data-id="wrapper" className={`dropdown-wrapper  ${ !isOpen? 'open': null}`}>
            <button data-id="toggle" className="btn" onClick={openDropDown}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropDownList isActive={isActive} activeList={activeList} listDropDown={listDropDown}/>
        </div>
    </div>)
    }

    export  default DropDown


