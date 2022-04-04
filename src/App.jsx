import {useState} from "react";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [urlState, setUrlState] = useState("../../assets/data.json");
  return (
    <div className="bg-gray-100">
      <Header setUrlState={setUrlState}></Header>
      <Body urlState={urlState}></Body>
    </div>
  );
}

export default App;
