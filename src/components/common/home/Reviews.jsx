import React from "react";
import maleAvatar from "../../../assets/images/meen.jpg";
import femaleAvatar from "../../../assets/images/girls.jpg";
import otherAvatar from "../../../assets/images/person.jpg";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      avatar: maleAvatar,
      name: "Ravi",
      rating: 5,
      comment: "EliteMart has an amazing collection! Fast delivery and great service.",
    },
    {
      id: 2,
      avatar: femaleAvatar,
      name: "Andria",
      rating: 4,
      comment: "Very satisfied with the products. Excellent customer support!",
    },
    {
      id: 3,
      avatar: otherAvatar,
      name: "Charan",
      rating: 5,
      comment: "Highly recommend EliteMart. The website is easy to navigate.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3 xl md:text-4xl font-extrabold text-orange-400 mb-6">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-2xl rounded-lg p-4 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Avatar */}
            <div className="w-20 h-20 mb-3 rounded-full overflow-hidden animate-bounce">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">{review.name}</h2>

            {/* Stars */}
            <div className="flex space-x-1 my-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`text-yellow-400`}>
                  {i < review.rating ? "★" : "☆"}
                </span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
