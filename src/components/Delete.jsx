import React from "react";

const Delete = ({ deleteElt, id }) => {
  return (
    <div>
      <button
        onClick={() => {
          deleteElt(id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Delete;
