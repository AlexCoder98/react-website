import { useState } from "react";

import Popup from "../components/Popup";

import "../styles/ArticleHomePage.css";

const ArticleHomePage = (props) => {
  const [showPopup, setShowPopup] = useState(true);

  const getPopup = (value) => {
    setShowPopup(value);
  };

  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="articlesHomePage">
      {props.articlesHomePage.map((article, key) => (
        <div key={key} className="container">
          <h4>{article.title}</h4>
          <div
            className="imgContainer"
            style={{ backgroundImage: "url(" + article.image + ")" }}
          ></div>
          <p>{article.text}</p>
          <button onClick={() => getPopup(article.id)}>Read more</button>

          <Popup
            show={showPopup === article.id}
            onHide={() => hidePopup(article.id)}
            titlePopup={article.titlePopup}
            textPopup={article.textPopup}
          />
        </div>
      ))}
    </section>
  );
};

export default ArticleHomePage;
