import { Fragment, useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// Props object desctrudtured {items, heading} =

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleCLick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
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
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListGroup;
