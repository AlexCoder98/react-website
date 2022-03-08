import { NavLink, Outlet } from "react-router-dom";

const ProductNavigation = () => {
  const productNavigationLinks = [
    {
      name: "Search",
      path: "/offer/search",
    },
    { name: "All products", path: "/offer/allproducts" },
    {
      name: "Add",
      path: "/offer/add",
    },
  ];

  const link = productNavigationLinks.map((link) => (
    <NavLink
      key={link.name}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#1e3737" : null,
          color: isActive ? "#70be2a" : null,
        };
      }}
      to={link.path}
    >
      {link.name}
    </NavLink>
  ));

  return (
    <div>
      <nav className="productMenu">{link}</nav>
      <Outlet />
    </div>
  );
};

export default ProductNavigation;
