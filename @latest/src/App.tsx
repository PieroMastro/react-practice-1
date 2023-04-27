import "./App.css";
// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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
  return (
    <>
      <Alert>
        <h1>Hello World</h1>
      </Alert>
    </>
  );
}

export default App;
