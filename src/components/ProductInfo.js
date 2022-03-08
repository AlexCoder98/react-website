import { useNavigate, useLocation } from "react-router-dom";

import "../styles/ProductInfo.css";

const ProductInfo = () => {
  let navigate = useNavigate();

  const { state } = useLocation();

  return (
    <article className="product">
      <h3>{state[0]}</h3>
      <div style={{ backgroundImage: "url(" + state[1] + ")" }}></div>
      <div className="description">
        <p>{state[2]}</p>
        <p>Price: ${state[3]}</p>
      </div>
      <button
        onClick={() => {
          navigate("/offer/allproducts");
        }}
      >
        Back
      </button>
    </article>
  );
};

export default ProductInfo;
