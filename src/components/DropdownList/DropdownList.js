import React from "react";
import "./DropdownList.css";
import DropdownListItem from "../DropdownListItem/DropdownListItem";

const DropdownList = props => {
  let text = "Select cateogry";
  const items = props.items.map(item => {
    if (item.id == props.currentValue) {
      text = item.title;
      console.log("match", text);
    }
    return (
      <DropdownListItem
        key={item.id}
        value={item.id}
        text={item.title}
        className="item"
        onClick={props.onClick}
      />
    );
  });

  return (
    <div>
      <div className="selection">{text}</div>
      <div className="dropdown">
        <span>
          <i className="fas fa-lg fa-caret-down" />
        </span>
        <div className="dropdown-content">{items}</div>
      </div>
    </div>
  );
};

export default DropdownList;
