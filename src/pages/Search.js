import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/Search.css";

const Search = ({ products }) => {
  let navigate = useNavigate();

  const [inputSearchProductValue, setInputSearchProductValue] = useState("");

  const [foundProducts, setFoundProducts] = useState("");

  const handleInputSearch = (e) => {
    setInputSearchProductValue(e.target.value);
  };

  const searchProduct = (e) => {
    e.preventDefault();
    if (inputSearchProductValue !== "") {
      const foundProducts = products.filter((product) =>
        product.name
          .toLowerCase()
          .includes(inputSearchProductValue.toLowerCase())
      );
      setFoundProducts(foundProducts);
      setInputSearchProductValue("");
    } else {
      setFoundProducts(products);
    }
  };

  return (
    <>
      <section className="search">
        <h3>Find your product</h3>
        <form onSubmit={searchProduct}>
          <input
            type="text"
            size={40}
            value={inputSearchProductValue}
            onChange={handleInputSearch}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </section>
      <section className="foundProductList">
        {foundProducts.length > 0 ? (
          foundProducts.map((product) => (
            <div className="foundProduct" key={product.id}>
              <h3>{product.name}</h3>
              <button
                onClick={() =>
                  navigate("/info", {
                    state: [
                      product.name,
                      product.photo,
                      product.description,
                      product.price,
                    ],
                  })
                }
              >
                More
              </button>
            </div>
          ))
        ) : (
          <h1 className="noFound">No results found</h1>
        )}
      </section>
    </>
  );
};

export default Search;
