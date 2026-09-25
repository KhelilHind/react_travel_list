import React from "react";

function Stats({ items }) {
  const numItems = items.length;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on you list, and you already packed X (X%).
      </em>
    </footer>
  );
}

export default Stats;
