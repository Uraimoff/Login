import Home from "./pages/Home/home";
import Info from "./pages/Info/Info";
import Contact from "./pages/Contact/Contact";


const routes = [
  { path: `/`, element: <Home /> },
  { path: `/info`, element: <Info /> },
  { path: `/contact`, element: <Contact /> },
];
export default routes;