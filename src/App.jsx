import { useEffect, useState } from "react";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Donation from "./components/donation/Donation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  const [currentHeight, setCurrentHeight] = useState(0);

  const handleScroll = () => {
    setCurrentHeight(window.scrollY); // => scroll position
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Home currentHeight={currentHeight} />
      <About />
      <Donation />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
