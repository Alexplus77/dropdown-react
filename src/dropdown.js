import React from "react";
import DropDownList from "./dropdownlist";
import('./main.css')

    const DropDown=({openDropDown, isOpen, dropdownList, activeList})=>{

    return (<div className="container">
        <div data-id="wrapper" className={`dropdown-wrapper  ${ !isOpen? 'open': null}`}>
            <button data-id="toggle" className="btn" onClick={openDropDown}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropDownList dropdownList={dropdownList} activeList={activeList}/>
        </div>
    </div>)
    }

    export  default DropDown


