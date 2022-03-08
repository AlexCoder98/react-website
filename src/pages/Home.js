import ArticleHomePage from "../components/ArticleHomePage";

const Home = (props) => {
  return (
    <>
      <div className="banner">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/24/17/27/leaves-1350175_960_720.jpg"
          alt="plants"
        />
        <h1>Welcome to our page!</h1>
      </div>
      <section className="announce">
        <h2>We are happy to announce a new line of products in our store</h2>
        <article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A atque,
          modi excepturi impedit quos ducimus voluptatem eveniet alias labore
          suscipit illum corrupti accusantium laboriosam quidem! Eveniet quam
          quod minus dolores aliquam numquam incidunt ratione dicta aperiam
          saepe modi, reprehenderit dolor porro magnam, asperiores eos est
          animi. Molestiae impedit rerum error non. Laboriosam nulla assumenda
          dolorum et commodi placeat? Neque, omnis harum! Culpa maiores
          excepturi facere suscipit atque non veritatis, qui ratione ullam sequi
          commodi nesciunt inventore repellat hic nulla in vel, distinctio odio,
          quibusdam molestias? Animi tempore vitae dolorem sit nobis aperiam,
          porro ullam id iure, consequuntur debitis beatae fugiat praesentium
          rerum cum temporibus eius sapiente. Labore veritatis numquam fugiat,
          unde tempore accusantium minus id temporibus veniam placeat, ipsa
          voluptatum rem quasi beatae doloremque eaque itaque incidunt
          blanditiis iure. Dicta quo, maxime assumenda molestias corporis omnis
          nobis dignissimos reprehenderit rerum eum modi aspernatur porro
          explicabo aperiam animi sapiente, doloribus dolores architecto, optio
          officia. Distinctio, architecto. Culpa molestiae accusamus maiores
          sunt, veniam cumque dicta nostrum! Quibusdam accusantium rem cumque
          non ab repellat neque quis ipsum quia debitis, dolor saepe sequi
          doloribus ut atque, culpa maxime, quam officia! Recusandae neque
          quisquam, vitae quaerat incidunt tempora illum libero cupiditate
          voluptatem natus, autem assumenda.
        </article>
      </section>
      <main>
        <ArticleHomePage articlesHomePage={props.articlesHomePage} />
      </main>
    </>
  );
};

export default Home;
