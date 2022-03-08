import { useNavigate } from "react-router-dom";

const Article = ({ articles }) => {
  let navigate = useNavigate();

  const articleElement = articles.map((article) => (
    <article key={article.id} className="article clearfix">
      <div
        className="articlePhoto"
        style={{ backgroundImage: "url(" + article.image + ")" }}
      ></div>
      <section>
        <h3>{article.title}</h3>
        <address>
          <b>Author:</b> {article.author}
        </address>
        <p>{article.text}</p>
        <button
          onClick={() => {
            navigate("/article", {
              state: [
                article.title,
                article.author,
                article.image,
                article.text,
                article.more,
              ],
            });
          }}
        >
          Read more
        </button>
      </section>
    </article>
  ));

  return <div className="blog">{articleElement}</div>;
};

export default Article;
