import { Fragment, useState } from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];
  //   items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleCLick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
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
