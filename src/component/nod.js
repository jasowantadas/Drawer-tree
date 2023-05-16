import { useEffect, useState } from "react";
import dataa from "../data.json";
import { useContext } from "react";
import { Mycontext } from "../App";

function Nod(props) {
  const { name } = props;
  const { dat, setDat } = useContext(Mycontext);
  const [doShow, setShow] = useState(false);
  const [childrens, setChildrens] = useState([]);
  //const [temp, setTemp] = useState();
  function handleShow() {
    changeSho(name);
  }

  //******************DFS******************//
  const findChildrens = (findName, nodePos) => {
    if (nodePos.name === findName) {
      let arr;
      if (nodePos.children) {
        arr = nodePos.children.map((i) => i.name);
      }
      console.log(arr); //Display in console
      return arr;
    }
    if (nodePos.children) {
      for (let i = 0; i < nodePos.children.length; i++) {
        const result = findChildrens(findName, nodePos.children[i]);
        if (result) {
          return result;
        }
      }
      //nodePos.children.forEach((i) => findChildrens(findName, i));
    }
  };
  function getSho(name) {
    const getShow = (node) => {
      if (node.name === name) {
        //console.log(node.show);
        setShow(node.show);
        return node.show;
      }
      if (node.children) {
        node.children.forEach((i) => getShow(i));
      }
    };
    dat.forEach((i) => getShow(i));
  }

  function changeSho(name) {
    const updatedState = [...dat];

    const changeShow = (node) => {
      if (node.name === name) {
        node.show = !node.show;
        return;
      }

      if (node.children) {
        node.children.forEach((i) => changeShow(i));
      }
    };

    updatedState.forEach((i) => changeShow(i));

    // update the state with the modified array
    setDat(updatedState);
  }
  //**********************DFS*********************************/
  useEffect(() => {
    getSho(name);
    //console.log(doShow);
    if (doShow) {
      const childrenss = findChildrens(name, dataa[0]);
      setChildrens(childrenss);
    }
  }, [doShow, dat]);

  return (
    <>
      <button onClick={() => handleShow()}>{name}</button>

      <br></br>
      {childrens &&
        doShow &&
        childrens.map((i, index) => <Nod key={i + index} name={i}></Nod>)}
    </>
  );
}

export default Nod;
