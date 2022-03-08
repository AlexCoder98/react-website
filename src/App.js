import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Add from "./pages/Add";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ArticleInfo from "./components/ArticleInfo";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Navigation from "./components/Navigation";
import Offer from "./pages/Offer";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import Search from "./pages/Search";
import ShoppingCart from "./pages/ShoppingCart";

import "./styles/Home.css";
import "./styles/Navigation.css";

import "./App.css";

class App extends React.Component {
  counter = 5;
  helpMessageCounter = 1;
  state = {
    products: [
      {
        name: "Bonsai",
        id: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam incidunt sed quo perspiciatis voluptatibus aut dolor ipsam officia quaerat!",
        price: "50",
        photo:
          "https://cdn.pixabay.com/photo/2021/03/22/11/40/bonsai-6114252_960_720.jpg",
      },
      {
        name: "Rose",
        id: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam incidunt sed quo perspiciatis voluptatibus aut dolor ipsam officia quaerat!",
        price: "30",
        photo:
          "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg",
      },
      {
        name: "Dracaena",
        id: 3,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam incidunt sed quo perspiciatis voluptatibus aut dolor ipsam officia quaerat!",
        price: "70",
        photo:
          "https://cdn.pixabay.com/photo/2015/08/09/12/54/dracaena-881535_960_720.jpg",
      },
      {
        name: "Succulent",
        id: 4,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam incidunt sed quo perspiciatis voluptatibus aut dolor ipsam officia quaerat!",
        price: "25",
        photo:
          "https://cdn.pixabay.com/photo/2016/06/18/01/25/a-fleshy-plant-1464417_960_720.jpg",
      },
    ],
    articles: [
      {
        id: 0,
        title: "5 tips for home plants growing",
        author: "Tomas Biggest",
        image:
          "https://cdn.pixabay.com/photo/2017/05/27/03/20/succulents-2347550_960_720.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa labore eaque vel, officia libero accusantium inventore deserunt aliquid, illo voluptatum earum eum facere, consectetur autem suscipit corrupti atque hic?",
        more: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi sequi aliquid blanditiis. Aut esse placeat vero quisquam rerum totam debitis soluta repellendus, commodi quas voluptates dignissimos fugiat eveniet eligendi quae pariatur id ducimus nemo perspiciatis quam quidem recusandae? Sint qui sit cupiditate? Temporibus ea odit quia reprehenderit, facilis neque aut sit eos tenetur ipsa suscipit ut quidem, necessitatibus sed quibusdam omnis doloremque non magnam assumenda incidunt voluptatibus nulla nemo totam. Tempora fugiat dicta natus. Id hic dolorum laudantium corrupti quisquam vitae dolores eligendi officia totam. Repellendus rerum distinctio nam adipisci. Architecto necessitatibus accusantium nulla veniam, sint doloribus, tempora harum libero quisquam atque molestias mollitia velit asperiores facere error odit. Voluptate ad officia nihil obcaecati recusandae voluptatibus officiis placeat, iusto fugit cum tempora ipsum alias ullam architecto odit. Asperiores alias repudiandae temporibus ipsam, minima consequatur nulla fugit mollitia magni architecto esse porro facere ducimus laborum repellendus labore blanditiis laudantium dignissimos molestiae aut harum officiis quasi voluptatibus et. Harum non modi blanditiis enim excepturi dicta reprehenderit odit magnam officia fugiat! Excepturi sit, facere molestias eaque commodi suscipit saepe amet asperiores aliquam ratione, sint quibusdam quos fugiat dolore reiciendis nobis distinctio velit, incidunt at sapiente nihil. Quas accusamus ullam consequatur fugiat sit et debitis aliquam voluptas, totam accusantium corrupti minus. Quo quae corrupti aliquid? Consequatur magni molestias aspernatur cupiditate blanditiis nihil eum neque minima omnis similique ex, placeat maxime maiores laudantium ipsam. Aliquam dolore ea quidem mollitia deserunt ut omnis nihil explicabo, id natus voluptatem, et alias tempora, earum facilis fugit porro voluptate repellendus delectus dolorum! Tempora dolores repellendus, blanditiis earum est autem voluptatibus accusamus incidunt officia magnam voluptates sit iste, eos nemo quis dolor. Ipsum pariatur unde quisquam nihil iste alias quaerat doloremque, est non soluta ex libero vitae reiciendis dolores quae nobis ut. Vitae fuga tenetur doloribus. Illum, error repudiandae.",
      },
      {
        id: 1,
        title: "How to take care of your roses properly?",
        author: "Jennifer Jork",
        image:
          "https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353_960_720.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa labore eaque vel, officia libero accusantium inventore deserunt aliquid, illo voluptatum earum eum facere, consectetur autem suscipit corrupti atque hic?",
        more: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellendus non fuga laudantium adipisci at ipsam, sint eos animi molestias repellat, corrupti dolore omnis. Ipsa temporibus provident, numquam officiis voluptatem tempora placeat deleniti accusamus ex consequuntur id incidunt, nobis repudiandae corporis a nostrum, minima impedit sapiente dolorem nam. Enim placeat nesciunt dolor eos architecto dolorum odio dignissimos delectus voluptas iste, laudantium illum sequi ad eaque minus velit. Ipsa eum magnam, fugiat nihil cupiditate perspiciatis veniam veritatis omnis numquam est non iure mollitia similique nostrum quasi labore temporibus. Impedit, alias ullam sed, culpa tenetur totam, asperiores obcaecati molestias nostrum debitis neque eaque! Tempora illo laboriosam, voluptatem repudiandae provident aut nobis numquam corrupti obcaecati consequatur nisi quis totam eos ad beatae alias, animi odio amet aliquam in delectus pariatur voluptas iure quia. Officia in eum sequi blanditiis libero distinctio repellat nulla illo voluptas hic, porro, omnis sunt alias, quam minus asperiores reprehenderit? Porro consectetur reiciendis impedit aperiam repellat aut hic dolore laudantium autem aspernatur dicta magni nulla accusantium quis, perferendis quaerat laboriosam quam, animi fuga est ratione ut tenetur distinctio placeat? Odit magni in iusto libero labore sequi minus sit totam ab? Quisquam perferendis distinctio ex, provident assumenda ducimus praesentium quia quidem! Molestiae dicta sint commodi nobis sunt, unde nulla doloremque aut debitis explicabo veritatis. Molestias dolorum deleniti minima ea dicta enim odit officiis tempora assumenda, soluta nemo! Esse explicabo, quae aperiam molestias maxime odit, sunt quia nobis adipisci officia laudantium? Ut itaque nam eos inventore autem ullam sequi corrupti, dolorum ea!",
      },
      {
        id: 2,
        title: "Beautiful places on the planet you must see!",
        author: "Mark Browny",
        image:
          "https://cdn.pixabay.com/photo/2019/01/04/14/54/landscape-3913325_960_720.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa labore eaque vel, officia libero accusantium inventore deserunt aliquid, illo voluptatum earum eum facere, consectetur autem suscipit corrupti atque hic?",
        more: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa a id, iste ut incidunt ab ex nulla dolores omnis atque voluptatem nihil, sed itaque? Unde animi, error maxime repudiandae ratione debitis ab, odit, sint illo culpa autem quod provident amet minima iusto dolores corrupti. Rerum quidem, culpa dolorum temporibus expedita, soluta omnis voluptatem obcaecati, delectus itaque aliquam ipsa! Eligendi temporibus optio accusantium omnis quibusdam ea non exercitationem excepturi, dolorem sunt! Ad reprehenderit eius corporis neque dolores dolorum facilis itaque aliquid distinctio unde expedita similique ut eveniet magnam, vitae provident corrupti deleniti facere cum perferendis dolore blanditiis laudantium quae ullam. Doloremque, ea perferendis unde architecto tempore culpa repellat sit assumenda temporibus suscipit enim, consectetur maiores iure optio tempora recusandae, reprehenderit harum iste. Sunt porro nulla suscipit laudantium vitae accusantium ea quaerat reprehenderit ipsam natus distinctio ipsa cupiditate repellat est, numquam fugit delectus illum inventore amet! Explicabo eligendi deleniti veniam inventore eveniet voluptatem exercitationem soluta quae nostrum aliquam cum hic consectetur rem tenetur quisquam unde ea, id perferendis quam officiis sit. Odio praesentium porro nostrum dicta quidem cumque, voluptates vel atque? Accusamus suscipit quibusdam officiis odio beatae. Id recusandae labore facere esse adipisci, unde, asperiores ipsum possimus consectetur illo similique quae.",
      },
      {
        id: 3,
        title: "Why the nature of Norway is so exciting?",
        author: "Ashley Lime",
        image:
          "https://cdn.pixabay.com/photo/2020/11/28/10/09/mountains-5784152_960_720.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa labore eaque vel, officia libero accusantium inventore deserunt aliquid, illo voluptatum earum eum facere, consectetur autem suscipit corrupti atque hic?",
        more: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nostrum qui eius eaque tempora itaque voluptatibus deserunt blanditiis aspernatur saepe veniam deleniti dolorum, corrupti consequuntur, asperiores ad dolore distinctio eum laudantium mollitia nulla recusandae hic, aut vero? Cum blanditiis non magnam neque, iusto placeat quasi corporis aspernatur? Labore voluptates sequi, iure, eligendi dolorum minus laboriosam voluptas, molestiae nam quasi similique laudantium. Velit quidem iusto ea suscipit exercitationem, fuga ducimus reiciendis? Sunt praesentium quis itaque tempora ipsa aperiam odio quae, laboriosam iste illum mollitia dicta expedita? Debitis quos amet, repellat mollitia in earum nobis, delectus consequuntur, deserunt quisquam corrupti non tenetur. Minima illo eum aut, quo explicabo animi aliquid amet praesentium voluptate repellendus dolores impedit at debitis et cumque perspiciatis adipisci, officiis iusto labore voluptas deleniti. Libero reiciendis corrupti asperiores numquam, ipsum minima quaerat nulla cum neque fugit vitae porro dolor maxime temporibus itaque autem qui blanditiis cupiditate reprehenderit! Minima, omnis.",
      },
      {
        id: 4,
        title: "Unusual and weird nature of Africa",
        author: "Coder Robinson",
        image:
          "https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005_960_720.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa labore eaque vel, officia libero accusantium inventore deserunt aliquid, illo voluptatum earum eum facere, consectetur autem suscipit corrupti atque hic?",
        more: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod totam rerum quaerat, nesciunt distinctio ab laborum necessitatibus maiores commodi voluptatum, minima, odit a! Ducimus ullam exercitationem perferendis laboriosam ratione rem nihil? Consequuntur dolores quos sit distinctio corporis necessitatibus. Cum nesciunt nemo esse id recusandae vero facere molestias vel quo iure in vitae corporis, placeat aliquam dicta. Sunt excepturi cupiditate placeat fugit eum omnis officiis impedit! At, veniam. Non dolor modi, eaque maxime aperiam dolore ut, sed quia amet tempora quis, exercitationem deserunt totam possimus asperiores cumque officia quos. Ratione odio voluptatibus saepe ea ipsa ad magnam eos velit. Totam doloremque laborum dolorem dicta cumque blanditiis voluptatibus quod natus vero debitis nemo, distinctio quo incidunt pariatur sit accusamus nostrum at eius. Beatae, quis! Ea incidunt explicabo excepturi vitae vero ducimus enim aliquam ut maiores itaque cupiditate sapiente quidem esse in, eligendi ipsam, doloribus ipsa? Optio eveniet quas facilis iure nam dicta voluptas quisquam? Sequi, aliquid accusamus amet, modi dolore libero quae, rem quo a et in assumenda officiis impedit neque. Officia, a deleniti. Accusantium fugit, corporis non veniam molestias nulla, voluptas aliquam in, unde cumque temporibus. Neque voluptatibus voluptatum doloremque amet in, ipsa vel. Quibusdam minus dolorem aperiam unde sed saepe iusto eaque dolorum, molestias, accusamus deleniti id optio excepturi fugit commodi maiores culpa nostrum reprehenderit repellat quod atque? Accusantium tenetur deserunt aut iusto dignissimos, aperiam sunt cum quam similique provident amet mollitia consectetur quia. Veniam quaerat tempore eos laboriosam.",
      },
    ],
    help: [],
    shop: [],
    articlesHomePage: [
      {
        id: 0,
        title: "Hello world",
        image:
          "https://cdn.pixabay.com/photo/2021/09/08/02/46/lotus-6605296_960_720.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor beatae natus dolorum dolore perferendis facilis aspernatur aliquid? Praesentium, accusamus itaque!",
        titlePopup: "Hello world!",
        textPopup:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil mollitia corrupti voluptates. Eius officia assumenda praesentium quam totam obcaecati iste pariatur, amet corporis illum alias nam illo exercitationem perspiciatis esse ratione! Officiis illum fuga totam officia tempora, saepe obcaecati doloremque at eveniet nulla atque quas expedita, quia soluta voluptatibus.",
      },
      {
        id: 1,
        title: "Welcome to the our page",
        image:
          "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_960_720.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor beatae natus dolorum dolore perferendis facilis aspernatur aliquid? Praesentium, accusamus itaque!",
        titlePopup: "Read more about us",
        textPopup:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil mollitia corrupti voluptates. Eius officia assumenda praesentium quam totam obcaecati iste pariatur, amet corporis illum alias nam illo exercitationem perspiciatis esse ratione! Officiis illum fuga totam officia tempora, saepe obcaecati doloremque at eveniet nulla atque quas expedita, quia soluta voluptatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum necessitatibus est autem laudantium exercitationem inventore fugiat voluptatem at rerum neque.",
      },
      {
        id: 2,
        title: "Have a nice day!",
        image:
          "https://cdn.pixabay.com/photo/2015/05/25/14/27/summer-783347_960_720.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor beatae natus dolorum dolore perferendis facilis aspernatur aliquid? Praesentium, accusamus itaque!",
        titlePopup: "What's your plan for today?",
        textPopup:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil mollitia corrupti voluptates. Eius officia assumenda praesentium quam totam obcaecati iste pariatur, amet corporis illum alias nam illo exercitationem perspiciatis esse ratione!",
      },
    ],
  };

  addProduct = (
    inputNameValue,
    textareaDescriptionValue,
    inputPhotoValue,
    inputPriceValue
  ) => {
    const newProduct = {
      name: inputNameValue,
      id: this.counter,
      description: textareaDescriptionValue,
      photo: inputPhotoValue,
      price: inputPriceValue,
    };
    this.counter++;

    this.setState({
      products: [...this.state.products, newProduct],
    });
  };

  sendForm = (inputFullNameValue, inputEmailValue, inputMessageValue) => {
    const newMessage = {
      id: this.helpMessageCounter,
      fullName: inputFullNameValue,
      email: inputEmailValue,
      message: inputMessageValue,
    };
    this.helpMessageCounter++;

    this.setState({
      help: [...this.state.help, newMessage],
    });
  };

  removeMessage = (id) => {
    let help = [...this.state.help];

    help = help.filter((element) => element.id !== id);

    this.setState({
      help,
    });
  };

  addProductToTheShoppingCart = (name, id, description, photo, price) => {
    let products = [...this.state.products];
    products = products.filter((product) => product.id !== id);

    const boughtProduct = {
      name: name,
      id: id,
      description: description,
      photo: photo,
      price: price,
    };

    this.setState({
      shop: [...this.state.shop, boughtProduct],
      products,
    });
  };

  removeProductFromTheShoppingCart = (id) => {
    let shop = [...this.state.shop];
    shop = shop.filter((product) => product.id !== id);

    this.setState({
      shop,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Navigation />
          <div className="wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    articlesHomePage={this.state.articlesHomePage}
                    popupContent={this.state.popupContent}
                  />
                }
              />
              <Route path="/offer" element={<Offer />}>
                <Route
                  path="search"
                  element={<Search products={this.state.products} />}
                />
                <Route
                  path="allproducts"
                  element={
                    <Products
                      products={this.state.products}
                      addProductToTheShoppingCart={
                        this.addProductToTheShoppingCart
                      }
                    />
                  }
                />
                <Route
                  path="add"
                  element={<Add addProduct={this.addProduct} />}
                />
              </Route>
              <Route path="/info" element={<ProductInfo />} />
              <Route
                path="/blog"
                element={<Blog articles={this.state.articles} />}
              />
              <Route path="/article" element={<ArticleInfo />} />
              <Route
                path="/help"
                element={
                  <Help
                    help={this.state.help}
                    sendForm={this.sendForm}
                    removeMessage={this.removeMessage}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/shop"
                element={
                  <ShoppingCart
                    shop={this.state.shop}
                    removeProductFromTheShoppingCart={
                      this.removeProductFromTheShoppingCart
                    }
                  />
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Outlet />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
