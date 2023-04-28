import "./App.css";
// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

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

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hi! I'm an Alert!</Alert>
      )}
      <Button color="warning" onClick={() => setShowAlert(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
