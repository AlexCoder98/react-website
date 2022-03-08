import Form from "../components/HelpForm";
import Message from "../components/Message";

import "../styles/Help.css";

const IF_NO_MESSAGES = "You have not sent any messages for us yet :(";

const Help = (props) => {
  return (
    <div className="help">
      <section className="first">
        <h1>In case you need some help</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          voluptatem aspernatur culpa facere, possimus ducimus velit maiores
          architecto consectetur similique eos beatae aperiam minima
          necessitatibus deleniti officia mollitia expedita in quaerat tempore?
          Autem, facere cumque deserunt harum vitae facilis qui commodi, eum
          expedita nostrum ex dolores cupiditate quia vel ratione adipisci
          inventore molestias rerum omnis dolor odit animi laudantium corporis
          debitis! Aperiam nobis odit cum provident sit perspiciatis fugiat
          enim, laudantium, eos aliquid veritatis dolor sequi blanditiis?
          Delectus eligendi quis quam culpa similique. Architecto obcaecati
          consequuntur natus similique ex exercitationem voluptatum, facere
          reiciendis esse libero voluptatibus numquam totam saepe?
        </p>
      </section>
      <section className="second">
        <div className="form">
          <Form help={props} sendForm={props.sendForm} />
        </div>
        {props.help.length > 0 ? (
          <section className="messages">
            <Message help={props.help} removeMessage={props.removeMessage} />
          </section>
        ) : (
          <h2 className="ifNo">{IF_NO_MESSAGES}</h2>
        )}
      </section>
    </div>
  );
};

export default Help;
