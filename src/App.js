import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import HomeContainer from "./container/HomeContainer";
import Header from "./component/Header";
import HeaderContainer from "./container/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
