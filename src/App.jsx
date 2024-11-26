import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/footer/Footer";
import Home from "./pages/home/Home";
import HeroSection from "./HeroSection";

function App() {
  return (
    <div>
      <HeroSection />
      <ImageSection />
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
