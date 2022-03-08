import AddProductForm from "../components/AddProductForm";

const Add = (props) => {
  return (
    <div>
      <AddProductForm addProduct={props.addProduct} />
    </div>
  );
};

export default Add;
