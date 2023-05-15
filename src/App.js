import data from "./data.json";
import Nod from "./component/nod";

function App() {
  return (
    <div>
      <Nod key={data[0].name + 0} name={data[0].name}></Nod>
    </div>
  );
}

export default App;
