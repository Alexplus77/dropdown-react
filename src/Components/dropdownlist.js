import React from "react";
import cn from "classnames";
import("../main.css");

const DropDownList = ({ activeList, activeItem, dropdownList }) => {
  return (
    <ul data-id="dropdown" className="dropdown">
      {dropdownList.map((elem, i) => {
        return (
          <li
            key={i}
            data-name={elem}
            onClick={(e) => activeList(e, i)}
            className={cn({ active: activeItem === elem })}
          >
            <a href="/#">{elem}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default DropDownList;
