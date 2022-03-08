import { useNavigate } from "react-router-dom";

import "../styles/ShoppingCart.css";

const INFORMATION = "You have not done any purchase yet :(";

const ShoppingCart = (props) => {
  console.log(props);

  let navigate = useNavigate();

  const boughtProduct = props.shop.map((product) => (
    <article key={product.id}>
      <h4>{product.name}</h4>
      <div className="photoContainer">
        <img src={product.photo} alt="plant" />
      </div>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <button
        onClick={() => props.removeProductFromTheShoppingCart(product.id)}
      >
        Remove
      </button>
    </article>
  ));

  if (props.shop.length === 0) {
    return (
      <div className="shop">
        <h2>{INFORMATION}</h2>
        <button
          className="goShop"
          onClick={() => navigate("/offer/allproducts")}
        >
          Go to the shop now
        </button>
      </div>
    );
  } else {
    return <div className="shop">{boughtProduct}</div>;
  }
};

export default ShoppingCart;
