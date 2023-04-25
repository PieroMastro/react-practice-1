import React from "react";

import { Fragment } from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];
  //   items = [];

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("clicked")}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </Fragment>
  );
};

export default ListGroup;
