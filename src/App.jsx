import { useEffect, useState } from "react";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Donation from "./components/donation/Donation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { motion } from "framer-motion";

function App() {
  const [currentHeight, setCurrentHeight] = useState(0);

  const handleScroll = () => {
    setCurrentHeight(window.scrollY); // => scroll position
  };

  return (
    <motion.div initial="hidden" animate="show">
      <Home currentHeight={currentHeight} />
      <About />
      <Donation />
      <Blog />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
