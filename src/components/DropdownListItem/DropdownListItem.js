import React from "react";

const DropdownListItem = props => {
  return (
    <div onClick={() => props.onClick(props.value)} className="item">
      {props.text}
    </div>
  );
};

export default DropdownListItem;
