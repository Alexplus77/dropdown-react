import React from "react";

import('./main.css')

const DropDownList = ({activeList, dropdownList}) => {

    return (
        <ul data-id="dropdown" className="dropdown">
            {
                dropdownList.map(({title, active}, i) => {
                    return <li key={i} className={active === 'true' ? 'active' : null}>
                        <a href="/#" onClick={() => activeList(i)}>{title}</a>
                        </li>
                })
            }
        </ul>
    )
}
export default DropDownList