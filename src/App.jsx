import "./App.css";
import Banner from "./Banner";
import Food from "./Food";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Food />
      </div>
      <Footer />
    </>
  );
}

export default App;
