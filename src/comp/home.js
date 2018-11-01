import React, { useState } from "react";

export default props => {
  let [name, setName] = useState("Name");
  const capitalize = word => {
    if (word !== undefined) {
      const [first, ...rest] = word;
      return first.toUpperCase() + rest.join("").toLowerCase();
    } else {
      return word;
    }
  };
  return (
    <React.Fragment>
      <h1>Happy Birthday to {capitalize(name)}</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(capitalize(e.target.value))}
      />
    </React.Fragment>
  );
};
