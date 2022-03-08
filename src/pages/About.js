import TeamMembers from "../components/TeamMembers";

import "../styles/About.css";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
      name: "Robert Johnson",
      position: "CEO",
    },
    {
      id: 2,
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390_960_720.jpg",
      name: "Sherill Rosalie",
      position: "Senior Marketing Specialist",
    },
    {
      id: 3,
      photo:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
      name: "Norman David",
      position: "Mid Full-Stack Developer",
    },
    {
      id: 4,
      photo:
        "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_960_720.jpg",
      name: "Kristie Lesley",
      position: "Junior UX/UI Designer",
    },
    {
      id: 5,
      photo:
        "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg",
      name: "Steve Duff",
      position: "Senior Front-End Developer",
    },
    {
      id: 6,
      photo:
        "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
      name: "Mel Kelli",
      position: "Sales Manager",
    },
  ];

  return (
    <>
      <h1 className="historyHeader">Our team</h1>
      <TeamMembers teamMembers={teamMembers} />
      <section className="history">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit
          provident odio mollitia praesentium unde omnis ex a rem autem aliquid
          delectus minima, atque animi id est pariatur placeat iste architecto
          ea iusto molestias. Voluptas accusantium deserunt perferendis
          repudiandae sint laborum, facere harum consequuntur quae nemo? At
          commodi illo, modi magni non temporibus dolores laudantium, a eaque
          reprehenderit vel aspernatur illum necessitatibus exercitationem sed
          iusto recusandae nihil in quos, amet debitis consequuntur voluptatum.
          Qui, eius, voluptates dignissimos omnis dolore consectetur tempore
          veritatis quae animi sapiente vitae. Sapiente recusandae aspernatur
          mollitia quisquam assumenda minus quod quibusdam dolorem, alias
          blanditiis veniam omnis officiis at incidunt est iste beatae doloribus
          totam cupiditate, dignissimos nihil vitae corrupti. Dolores,
          doloribus?
        </p>
        <p>
          Facilis, praesentium eum nam, doloribus vero incidunt sequi quod
          perspiciatis iure quasi error aut, tenetur unde non asperiores! Ullam
          quia magni consequatur earum maiores eveniet iure libero saepe
          incidunt sit totam, consequuntur quasi repellendus, id nostrum ad
          molestiae ipsum optio? Asperiores vero ratione, necessitatibus amet
          sed tempore nam quasi enim fuga earum natus iure quos error cum labore
          distinctio quam exercitationem. Omnis quam nihil accusamus fugiat,
          possimus voluptatibus at facere ipsum earum reprehenderit, excepturi
          aliquam, provident molestiae dolor adipisci ex officia illo nobis!
          Porro, ullam.
        </p>
        <h3>Achivements</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            consectetur laboriosam labore ut tempora corporis asperiores omnis
            ea eius quibusdam eos quos non molestiae, quas a tempore voluptates
            doloremque itaque.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            saepe aperiam rem ad earum. Quas aut earum in, nihil eos,
            reprehenderit illo eaque fuga explicabo, veniam ea molestiae?
            Placeat, neque.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eius
            illum neque repellat nam cumque libero nemo maiores excepturi
            laudantium incidunt eum vero consectetur quasi, deleniti ipsa sed
            molestiae iusto atque. Asperiores accusamus itaque quos repellat
            ratione, aperiam voluptatibus veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            excepturi!
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            fuga maiores saepe alias. Eaque inventore porro reprehenderit dolore
            officia ipsam veniam eius voluptatum, consequatur omnis, quidem,
            necessitatibus aut. Ipsam iste error vitae, doloremque possimus
            laborum ad nulla neque delectus eum nostrum repudiandae. Ex sed
            placeat consequatur corporis rem. Cumque nesciunt reprehenderit
            sequi repellendus dolorum dignissimos repudiandae, tempore dolores
            architecto ipsa ratione culpa at corporis similique?
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
