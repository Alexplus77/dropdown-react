import React from "react";
import('./main.css')

const DropDownList = ({listDropDown, activeList, isActive})=>{
    return(
        <ul data-id="dropdown" className="dropdown">
            {
                listDropDown.map((elem, i)=>{
                    return     <li key={elem} className={isActive? 'active': null} ><a href="/#"  onClick={(e)=>activeList(e)}>{elem}</a></li>
                })
            }
        </ul>
    )
}
export default DropDownList