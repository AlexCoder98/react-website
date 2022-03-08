import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const navigate = useNavigate();

  const productElement = props.products.map((product) => (
    <article key={product.id}>
      <h4>{product.name}</h4>
      <div className="photoContainer">
        <img src={product.photo} alt="plant" />
      </div>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <div className="buttons">
        <button
          onClick={() =>
            props.addProductToTheShoppingCart(
              product.name,
              product.id,
              product.description,
              product.photo,
              product.price
            )
          }
        >
          Buy
        </button>
        <button
          onClick={() => {
            navigate("/info", {
              state: [
                product.name,
                product.photo,
                product.description,
                product.price,
              ],
            });
          }}
        >
          Info
        </button>
      </div>
    </article>
  ));

  return (
    <>
      <div className="productList">{productElement}</div>
    </>
  );
};

export default Products;
