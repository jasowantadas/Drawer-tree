import { useCallback, useEffect, useState } from "react";
import dataa from "../data.json";
function Nod(props) {
  const [doShow, setShow] = useState(false);
  function handleShow() {
    setShow((previous) => !previous);
  }

  const { name } = props;
  const [childrens, setChildrens] = useState([]);

  //******************DFS******************//
  const findChildrens = (findName, nodePos) => {
    if (nodePos.name === findName) {
      let arr;
      if (nodePos.children) {
        arr = nodePos.children.map((i) => i.name);
      }
      console.log(arr);
      return arr;
    }
    if (nodePos.children) {
      for (let i = 0; i < nodePos.children.length; i++) {
        const result = findChildrens(findName, nodePos.children[i]);
        if (result) {
          return result;
        }
      }
    }
  };
  useEffect(() => {
    if (doShow) {
      const childrenss = findChildrens(name, dataa[0]);
      setChildrens(childrenss);
    }
  }, [doShow]);

  return (
    <>
      <button onClick={() => handleShow()}>{name}</button>

      <br></br>
      {childrens &&
        doShow &&
        childrens.map((i, index) => <Nod key={index} name={i}></Nod>)}
    </>
  );
}

export default Nod;
