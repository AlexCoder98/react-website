import Article from "../components/Article";
import "../styles/Article.css";

const Blog = ({ articles }) => {
  return <Article articles={articles} />;
};

export default Blog;
