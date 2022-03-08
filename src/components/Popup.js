import "../styles/Popup.css";

const Popup = (props) => {
  return (
    <>
      {props.show && (
        <section className="pop-up">
          <div className="pop-up_container">
            <h3>{props.titlePopup}</h3>
            <p>{props.textPopup}</p>
            <button className="btnClose" onClick={props.onHide}>
              X
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Popup;
