import "./App.scss";
import HeaderGallery from "./components/HeaderGallery";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="fade-in">
      <HeaderGallery />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
