import React from "react";
import './main.css'

function ListDropDown ({listDropdown}){

    return(
        <div>
            <ul data-id="dropdown" className="dropdown">
                {
                    listDropdown.map((elem)=>{
                   return     <li key={elem}><a href="#">{elem}</a></li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListDropDown;