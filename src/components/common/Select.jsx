import React from "react";
const Select = React.forwardRef(({ label, options }, ref) => (
  <div className="form-group">
    <label>{label}</label>
    <select className="form-control" name="AgeRange" ref={ref}>
      <option value="">Select</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
));

export default Select;
