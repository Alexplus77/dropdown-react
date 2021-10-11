import React from "react";

import('../main.css')

const DropDownList = ({activeList, activeItem, dropdownList}) => {
    console.log(activeItem)
    return (
        <ul data-id="dropdown" className="dropdown">
            {
                dropdownList.map((elem, i) => {
                    return <li key={i} onClick={( e) => activeList(e, i)}  className={activeItem[i] ? 'active' : null} >
                        <a href="/#" >{elem}</a>
                        </li>
                })
            }
        </ul>
    )
}
export default DropDownList