import React from "react";
import bannerImg from "../../../assets/images/elitee.jpeg"; // adjust path if needed

const Home = () => {
  return (
    <section
      className="w-full mt-40 mr-20 mb-20 flex justify-center items-center"
    >
      {/* Full-width card */}
      <div className="w-full max-w-[1200px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image inside card */}
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-[60vh] md:h-[80vh] lg:h-[95vh] object-fit"
        />
      </div>
    </section>
  );
};

export default Home;
