import Home from "./components/Home";
import Search from "./components/Home/Search";
import NavBar from "./components/NavBar";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />
    </div>
  );
}

export default App;
