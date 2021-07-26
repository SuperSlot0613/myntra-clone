import React from "react";
import "../CSS/ProductFilter.css";

function CheckboxItem({ color, item, value, check, checkbox, radio,radioid }) {
  return (
    <div className="checkbox_list">
      {checkbox && (
        <input
          type="checkbox"
          className="checkboxes"
          id="checkbox1"
          value="Dress"
        />
      )}
      {radio && (
        <input className="checkboxes" type="radio" id={radioid}name="radio_button"/>
      )}
      {check && (
        <span style={{ backgroundColor: color }} className="colorDisplay">
          .
        </span>
      )}
      <label for="vehicle1">
        {item} <span>({value})</span>
      </label>
      <br></br>
    </div>
  );
}

export default CheckboxItem;
