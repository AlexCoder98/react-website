import { NavLink } from "react-router-dom";

const Navigation = () => {
  const menu = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Offer", path: "/offer" },
    { id: 2, name: "Blog", path: "/blog" },
    { id: 3, name: "Help", path: "/help" },
    { id: 4, name: "About us", path: "/about" },
    { id: 5, name: "Shopping cart", path: "/shop" },
  ];

  const menuElement = menu.map((link) => (
    <NavLink
      key={link.id}
      to={link.path}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#1e3737" : null,
          color: isActive ? "#70be2a" : null,
        };
      }}
    >
      {link.name}
    </NavLink>
  ));

  return (
    <div>
      <nav className="menu">{menuElement}</nav>
    </div>
  );
};

export default Navigation;
