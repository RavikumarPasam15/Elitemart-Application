import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import bannerImg from "../../../assets/images/offer.jpeg";

// Product images
import prod1 from "../../../assets/images/banana.jpeg";
import prod2 from "../../../assets/images/Apple.jpeg";
import prod3 from "../../../assets/images/bred.jpg";
import prod4 from "../../../assets/images/penut.jpeg";
import prod5 from "../../../assets/images/oil.jpeg";
import prod6 from "../../../assets/images/bottl.jpeg";
import prod7 from "../../../assets/images/coffee.jpeg";
import prod8 from "../../../assets/images/mix.jpeg";
import prod9 from "../../../assets/images/veg.jpeg";

const Offers = () => {
  const products = [
    { id: 1, name: "Banana", price: 29.99, discount: "15% OFF", image: prod1 },
    { id: 2, name: "Apples", price: 39.99, discount: "20% OFF", image: prod2 },
    { id: 3, name: "Bred", price: 19.99, discount: "10% OFF", image: prod3 },
    { id: 4, name: "Peanut Butter", price: 49.99, discount: "25% OFF", image: prod4 },
    { id: 5, name: "Sunflower Oil", price: 24.99, discount: "30% OFF", image: prod5 },
    { id: 6, name: "Fruit Mix", price: 34.99, discount: "18% OFF", image: prod6 },
    { id: 7, name: "Coffee", price: 59.99, discount: "10% OFF", image: prod7 },
    { id: 8, name: "Mix Pack", price: 69.99, discount: "20% OFF", image: prod8 },
    { id: 9, name: "Vegetables", price: 79.99, discount: "15% OFF", image: prod9 },
  ];

  const carouselRef = useRef(null);

  // Infinite smooth scroll effect
  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth / 2;
    let scrollPos = 0;
    let lastTimestamp = performance.now();

    const step = (timestamp) => {
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const speedMultiplier = window.innerWidth < 768 ? 0.05 : 0.1; // slower for mobile
      scrollPos += speedMultiplier * elapsed;
      if (scrollPos >= totalWidth) scrollPos = 0;

      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (carouselRef.current) carouselRef.current.scrollLeft += 200;
    },
    onSwipedRight: () => {
      if (carouselRef.current) carouselRef.current.scrollLeft -= 200;
    },
    trackMouse: true,
  });

  return (
    <div className="p-4 relative">
      {/* Top Banner */}
      <div className="w-full h-75 mb-6 shadow-md rounded-lg overflow-hidden">
        <img
          src={bannerImg}
          alt="Offers Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Title */}
      <h1 className="text-3 xl md:text-4xl font-extrabold text-orange-400 mb-10 text-start">
        Offers Zone
      </h1>

      {/* Carousel with fade effect */}
      <div className="relative">
        <div
          {...handlers}
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide relative z-10"
        >
          {products.concat(products).map((product, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-48 sm:w-64 h-60 sm:h-80 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Discount Badge */}
              <span className="absolute top-2 left-2 text-orange-400 font-bold text-lg sm:text-2xl bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-lg">
                {product.discount}
              </span>

              {/* Product Name & Price */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white px-2 py-1 text-center text-sm sm:text-base">
                <h2 className="font-semibold">{product.name}</h2>
                <p className="font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fades */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-16 bg-gradient-to-r from-gray-50 to-transparent z-20"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-16 bg-gradient-to-l from-gray-50 to-transparent z-20"></div>
      </div>

      <style jsx>{`
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Offers;
