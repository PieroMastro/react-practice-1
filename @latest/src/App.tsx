import "./App.css";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like/Like";

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

  let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hi! I'm an Alert!</Alert>
      )}
      <div>
        <Button color="warning" onClick={() => setShowAlert(true)}>
          My Button
        </Button>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Like onClick={() => console.log("clicked")} />
      </div>
    </>
  );
}

export default App;
