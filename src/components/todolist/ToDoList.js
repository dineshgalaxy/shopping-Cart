import { useState } from "react";
import Button from "../Button";
import Heading from "../Heading";
import List from "./List";
// import Input from "../Input";

const ToDoList = ()=>{
    const [inputList,setInputList] = useState("")
    const [items,setItems] = useState([])

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }
    const listOfItems = ()=>{
      setItems((oldItems)=>{
        return [...oldItems,inputList]
      })
    }
     const deleteItems = (id) => {
        setItems((oldItems) => {
          return oldItems.filter((arrItem, index) => {
            return index !== id;
          });
        });
     };
    
    return (
      <>
        <Heading headingText="hello i am dinesh "></Heading>
        <div onChange={itemEvent}>
          enter your name
          </div>
        <Button btnText="Submit" onClick={listOfItems}></Button>
        <ul>
          {items.map((itemval, index) => {
            return (
              <List
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              ></List>
            );
          })}
        </ul>
      </>
    );
}
export default ToDoList;
