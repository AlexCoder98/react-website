import { useNavigate } from "react-router-dom";

import "../styles/Error.css";

const Error = () => {
  let navigate = useNavigate();

  return (
    <header>
      <h1>Error 404. Page not Found :(</h1>
      <h2>
        Ooopss... something went wrong... Go back to the Home page and start it
        again!
      </h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </button>
    </header>
  );
};

export default Error;
