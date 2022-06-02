import { useState } from "react";
import Heading from "../Heading";
import './addtocart.css'
const AddToCart = () =>{
    // const PAGE_PRODUCTS = "products";
    // const PAGE_CART = "cart";

    const [cart,setCart] = useState([]);
    const [page,setPage] = useState('products');

    const [products] = useState([
      {
        id:1,
        img: "images/tshirt1.jpg",
        name: "red t-shirt",
        price: "$ 4.20",
      },
      {
        id:2,
        img: "images/tshirt2.jpg",
        name: "blue t-shirt",
        price: "$ 4.20",
      },
      {
        id:3,
        img: "images/tshirt3.jpg",
        name: "orange t-shirt",
        price: "$ 4.20",
      },
    ]);

    const seen = new Set();

    const addToCart = (productItem)=>{
      setCart([...cart,{...productItem}].filter((el)=>{
        const duplicate = seen.has(el.id);
        seen.add(el.id)
        return !duplicate;
      }));
      
    }


    const deleteCart = (productItem) =>{
      setCart(cart.filter((productes)=> productes !==productItem))
    }

    const navigateTo = (nextPage) =>{
      setPage(nextPage);
    }
  

const renderProducts = () => {
  return (
    <>
      <Heading headingText="Add To Cart"></Heading>
      <div className="product">
        {products.map((productItem) => {
          return (
            <div key={productItem.id}>
              <img src={productItem.img} alt={productItem.name}></img>
              <h1>{productItem.name}</h1>
              <p>Price: {productItem.price}</p>
              <button onClick={() => addToCart(productItem)}>add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

      const renderCart = ()=>{
        return (
          <>
            <div className="product">
              {cart.map((productItem, index) => {
                return (
                  <div key={index}>
                    <img src={productItem.img} alt={productItem.name}></img>
                    <h1>{productItem.name}</h1>
                    <p>Price: {productItem.price}</p>
                    <div>Quantity: <input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                    <button onClick={()=>deleteCart(productItem)}>remove cart</button>
                  </div>
                );
              })}
            </div>
          </>
        );
      }

    return (
      <>
        <header>
          <button onClick={() => navigateTo('cart')}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cart.length}
          </button>
          <button onClick={() => navigateTo('products')}>
            View Products
          </button>
        </header>
        {page === 'products' && renderProducts()}
        {page === 'cart' && renderCart()}
      </>
    );
}

export default AddToCart;