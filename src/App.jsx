import Navbar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer";
//import FloatingContact from "./components/ui/FloatingContact";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import BookingCTA from "./sections/BookingCTA";
import Location from "./sections/Locations";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
     {/* <FloatingContact /> */}
    </>
  );
}