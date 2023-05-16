import data from "./data.json";
import Nod from "./component/nod";
import { createContext, useEffect, useState } from "react";
export const Mycontext = createContext();
let D = data;

function App() {
  function addShowProperty(data) {
    if (!data) {
      return;
    }
    data.forEach((node) => {
      node["show"] = false;
      addShowProperty(node.children);
    });
  }
  //Adding Show property to the Data
  useEffect(() => {
    addShowProperty(D);
  }, []);
  const [dat, setDat] = useState(D);
  return (
    <Mycontext.Provider value={{ dat, setDat }}>
      <div>
        <Nod key={data[0].name + 0} name={data[0].name}></Nod>
      </div>
    </Mycontext.Provider>
  );
}

export default App;
