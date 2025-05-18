import "./App.css";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
