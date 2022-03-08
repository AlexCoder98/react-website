import { useState } from "react";

import "../styles/AddProductForm.css";

const AddProductForm = (props) => {
  console.log(props);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPhotoValue, setInputPhotoValue] = useState("");
  const [textareaDescriptionValue, setTextareaDescriptionValue] = useState("");
  const [inputPriceValue, setInputPriceValue] = useState("");

  const handleInputNameValue = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleInputPhotoValue = (e) => {
    setInputPhotoValue(e.target.value);
  };

  const handleTextareaDescriptionValue = (e) => {
    setTextareaDescriptionValue(e.target.value);
  };

  const handleInputPriceValue = (e) => {
    setInputPriceValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputNameValue.length > 5) {
      props.addProduct(
        inputNameValue,
        textareaDescriptionValue,
        inputPhotoValue,
        inputPriceValue
      );
      setInputNameValue("");
      setInputPhotoValue("");
      setTextareaDescriptionValue("");
      setInputPriceValue("");
    } else {
      alert("Your product name is too short!");
      setInputNameValue("");
    }
  };

  return (
    <>
      <form className="add" onSubmit={handleOnSubmit}>
        <h3>Add new product</h3>
        <div>
          <label htmlFor="name">Product name</label>
          <input
            id="name"
            type="text"
            value={inputNameValue}
            onChange={handleInputNameValue}
          />
        </div>
        <div>
          <label htmlFor="photo">Photo URL</label>
          <input
            id="photo"
            type="text"
            required={true}
            value={inputPhotoValue}
            onChange={handleInputPhotoValue}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Write your description..."
            cols="30"
            rows="10"
            value={textareaDescriptionValue}
            onChange={handleTextareaDescriptionValue}
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={inputPriceValue}
            onChange={handleInputPriceValue}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddProductForm;
