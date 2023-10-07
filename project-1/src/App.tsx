// import Message from "./Message";
// import ListGroup from "./components/Listgroup";

// function App(){
//   return <div><ListGroup /></div>
// }

// export default App;

function MyButton(){
  return <button>This is a button</button>
}

export default function App(){
  return (
  <div>
    <h1>This is the main App Function</h1>
    <MyButton></MyButton>
  </div>
  );
}