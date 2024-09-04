import { useEffect, useState } from "react";
import "./Product.css";

const ListProducts = () => {
    const widthStyle = {
        width: "100%"
    }
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/product/list")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <>
      {products &&
        products.map((e) => {
          return (
            <>
              <div class="card">
                <img src={"http://localhost:8080/files/uploads/" + e.image} alt="Denim Jeans" style={widthStyle}/>
                <h1>{e.image}</h1>
                <p class="price">Rs.{e.price}</p>
                <p>{e.desc}.</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </>
          );
        })}
    </>
  );
};

export default ListProducts;
