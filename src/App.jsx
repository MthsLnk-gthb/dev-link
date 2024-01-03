import { Outlet } from "react-router-dom";
import "./styles/styles.scss";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar/>
        <Outlet />
      </main>
    </>
  );
}

export default App;
