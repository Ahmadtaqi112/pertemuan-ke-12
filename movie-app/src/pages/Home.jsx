import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import AddMovie from "../components/Addmovieform/Addmovie";


function Home() {
  return (
  <div>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovie />
     <Footer />
  </div>
  );
}

export default Home;