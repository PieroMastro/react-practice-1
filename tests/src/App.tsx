import { Fragment, useEffect, useState } from "react";
// import produce from "immer";
// import NavBar from "./NavBar";
// import Cart from "./Cart";
// import ExpandableText from "./ExpandableText";
import ProductList from "./components/ProductList";

// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like/Like";
// import Message from "./Message";

// function App() {
//   let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </>
//   );
// }

// function App() {
//   const [showAlert, setShowAlert] = useState(false);

//   let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <>
//       {showAlert && (
//         <Alert onClose={() => setShowAlert(false)}>Hi! I'm an Alert!</Alert>
//       )}
//       <div>
//         <Button color="warning" onClick={() => setShowAlert(true)}>
//           My Button
//         </Button>
//       </div>
//       <div>
//         <ListGroup
//           items={items}
//           heading="Cities"
//           onSelectItem={handleSelectItem}
//         />
//       </div>
//       <div>
//         <Like onClick={() => console.log("clicked")} />
//       </div>
//       <div>
//         <Message />
//       </div>
//     </>
//   );
// }

// const App = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map(bug=> bug.id === 1 ? {...bugs, fixed: true} : bugs))
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// const App = () => {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

//   return (
//     <Fragment>
//       <div>
//         <NavBar cartItemsCount={cartItems.length} />
//         <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//       </div>
//       <div>
//         <ExpandableText>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
//           consectetur quis vero expedita adipisci recusandae sunt facere
//           provident nesciunt totam itaque atque, iure laboriosam pariatur, vel,
//           hic laborum quae odio eligendi accusamus dolore? Quis omnis excepturi
//           autem a delectus repellendus, consectetur dolorem. Minima, eius.
//           Nostrum sapiente consequuntur facilis ad quasi! Saepe voluptates
//           aliquid dicta consectetur possimus molestiae tempore ad inventore
//           illum illo est, delectus iure fugit eum error et sit nulla! Suscipit
//           corrupti dolorum illum ab fugiat, eligendi delectus cum illo numquam?
//           Quaerat ducimus recusandae adipisci similique aspernatur. Ducimus
//           suscipit voluptatum quasi atque iure tempora sapiente deleniti magnam
//           vitae quidem.
//         </ExpandableText>
//       </div>
//     </Fragment>
//   );
// };

// export default App;

const App = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        name=""
        id=""
        className="form-select my-5"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
