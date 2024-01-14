import { Outlet } from "react-router-dom";
import "./styles/styles.scss";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <main>
        <Header/>
        <Outlet />
      </main>
    </>
  );
}

export default App;
