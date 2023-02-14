import React from "react";

export function Withdrawl({ withdraw }) {
  return (
    <div>
        <input className="btn btn-primary" type="submit" value="Withdraw" onClick={() => withdraw()}/>
    </div>
  );
}
