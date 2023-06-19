import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topbar/Topbar";

function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <TopBar />
      {router}
    </div>
  );
}

export default App;
