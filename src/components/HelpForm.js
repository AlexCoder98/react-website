import { useState } from "react";
import "../styles/HelpForm.css";

const ALERT =
  "Your full name is too short ora maybe your email address doesn't include @ sign";

const HelpForm = (props) => {
  console.log(props);
  const [inputFullNameValue, setInputFullNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputMessageValue, setInputMessageValue] = useState("");

  const handleInputFullNameValue = (e) => {
    setInputFullNameValue(e.target.value);
  };

  const handleInputEmailValue = (e) => {
    setInputEmailValue(e.target.value);
  };

  const handleInputMessageValue = (e) => {
    setInputMessageValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputFullNameValue.length > 5 && inputEmailValue.includes("@")) {
      props.sendForm(inputFullNameValue, inputEmailValue, inputMessageValue);
      setInputFullNameValue("");
      setInputEmailValue("");
      setInputMessageValue("");
    } else {
      alert(ALERT);
      setInputEmailValue("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="helpForm">
      <h2>Write for us!</h2>
      <div>
        <label htmlFor="full_name">Your full name</label>
        <input
          type="text"
          id="full_name"
          onChange={handleInputFullNameValue}
          required={true}
          value={inputFullNameValue}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={inputEmailValue}
          required={true}
          onChange={handleInputEmailValue}
        />
      </div>
      <div>
        <label htmlFor="message">Your massage</label>
        <textarea
          id="message"
          rows={15}
          cols={20}
          placeholder="Your message goes here..."
          required={true}
          onChange={handleInputMessageValue}
          value={inputMessageValue}
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default HelpForm;
