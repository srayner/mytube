import React from "react";
import "./DropdownList.css";

const DropdownList = props => {
  const items = props.items.map(item => {
    return (
      <div key={item.id} className="item">
        {item.title}
      </div>
    );
  });

  return (
    <div>
      <div className="selection">Hello</div>
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
