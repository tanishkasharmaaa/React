import React from "react";

function DataDisplay({ data }) {
  return (
    <div>
      <h2>Data Display</h2>
      <div style={{ display: "grid", gridTemplateColumns: "300px 300px 300px 300px 300px" }}>
        {data.map((item, index) => (
          <div key={index} style={{ border: "solid green", padding: "10px" }}>
            <p>{item.userId}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataDisplay;
