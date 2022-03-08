import { useNavigate, useLocation } from "react-router-dom";

import "../styles/ArticleInfo.css";

const ArticleInfo = () => {
  const { state } = useLocation();

  let navigate = useNavigate();

  return (
    <article className="artInf">
      <h2>{state[0]}</h2>
      <address>
        <b>Author:</b> {state[1]}
      </address>
      <div
        className="artImg"
        style={{ backgroundImage: "url(" + state[2] + ")" }}
      ></div>
      <p>{state[3]}</p>
      <p>{state[4]}</p>
      <button
        onClick={() => {
          navigate("/blog");
        }}
      >
        Back
      </button>
    </article>
  );
};

export default ArticleInfo;
