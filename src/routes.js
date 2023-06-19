import Home from "./pages/home/Home";
import UserList from "./pages/Users/UserList";
import Products from "./pages/products/Products";
import NewUser from "./pages/newUser/NewUser";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
