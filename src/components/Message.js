import "../styles/Message.css";

const Message = (props) => {
  const { help } = props;
  const messageElement = help.map((message) => (
    <div key={message.id}>
      <h4>Author: {message.fullName}</h4>
      <address>
        <b>Email:</b> {message.email}
      </address>
      <p>{message.message}</p>
      <button
        onClick={() => props.removeMessage(message.id)}
        className="remBtn"
      >
        Remove message
      </button>
    </div>
  ));

  return <article className="message">{messageElement}</article>;
};

export default Message;
