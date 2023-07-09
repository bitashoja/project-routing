import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
