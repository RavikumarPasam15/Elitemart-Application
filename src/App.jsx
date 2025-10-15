import React, { useRef } from "react";
import Header from "./components/common/home/Header";
import Footer from "./components/common/footer/Footer";
import AboutUs from "./components/common/home/AboutUs";
import DownloadApp from "./components/common/home/Download";
import Helpdesk from "./components/common/home/HelpDesk";
import Offers from "./components/common/home/Offers";
import Reviews from "./components/common/home/Reviews";

const App = () => {
  const aboutRef = useRef(null);
  const offersRef = useRef(null);
  const reviewsRef = useRef(null);
  const helpdeskRef = useRef(null);
  const downloadRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const refs = { aboutRef, offersRef, reviewsRef, helpdeskRef, downloadRef };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-orange-50 via-white to-orange-100">
      {/* Header */}
      <Header scrollToSection={scrollToSection} refs={refs} />

      {/* Spacer for fixed header */}
      <div className="pt-28 flex-1 overflow-y-auto scroll-smooth">
        <section ref={aboutRef} className="my-8">
          <AboutUs />
        </section>
        <section ref={offersRef} className="my-8">
          <Offers />
        </section>
        <section ref={reviewsRef} className="my-8">
          <Reviews />
        </section>
        <section ref={helpdeskRef} className="my-8">
          <Helpdesk />
        </section>
        <section ref={downloadRef} className="my-8">
          <DownloadApp />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
