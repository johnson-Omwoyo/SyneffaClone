import App from "./App";
import Home from "./components/Home/Home";

const Routes = [
  {
    path: "/",
    element: <App />,
    errorELement: "an Error occured",
    children: [{ path: "/", element: <Home /> }],
  },
];

export default Routes;
