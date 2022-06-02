import { useState } from "react";

const Demo = () =>{
const myArr = [
  {
    id: 1,
    name: "red t-shirt",
    price: "$ 4.20",
  },
  {
    id: 2,
    name: "blue t-shirt",
    price: "$ 4.20",
  },
  {
    id: 3,
    name: "orange t-shirt",
    price: "$ 4.20",
  },
];

    const [name, setName] = useState(myArr);


    const myFunction = (valueItem) =>{
      setName([...name,valueItem])

    }
    return (
      <>        {
          name.map((valueItem)=>{
            return (
              <div key={valueItem.id}>
                <h1>{valueItem.name}</h1>
                <p>{valueItem.price}</p>

                <button onClick={() => myFunction(valueItem)}>click me</button>
              </div>
            );
          })
        }
        </>

    );
}
export default Demo;