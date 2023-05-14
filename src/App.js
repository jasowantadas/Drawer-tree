import "./App.css";
import data from "./data.json";
import Nod from "./component/nod";

function App() {
  return (
    <div>
      <Nod name={data[0].name}></Nod>
    </div>
  );
}

export default App;
//<Nod key={index} whole={i} onClick={() => {}}></Nod>
/*{data.map((i, index) => (
  <p key={index}>{i.children.name}</p>
  ))}*/
