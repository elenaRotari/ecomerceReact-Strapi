import { Outlet } from "react-router-dom";
import "./App.scss";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
