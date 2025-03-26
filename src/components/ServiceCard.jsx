// import React from "react";

// const ServiceCard = ({ image, title, description }) => {
//   return (
//     <div className="bg-[#FFBE2E] p-6 rounded-lg shadow-lg max-w-xs text-center transform hover:scale-105 transition duration-300">
//       <img src={image} alt={title} className="w-full h-40 object-cover rounded-md shadow-sm" />
//       <h3 className="text-2xl font-semibold text-gray-800 mt-4">{title}</h3>
//       <p className="text-gray-700 mt-2">{description}</p>
//     </div>
//   );
// };

// export default ServiceCard;

// import React from "react";

// const ServiceCard = ({ image, title, description }) => {
//   return (
//     <div className="relative bg-gradient-to-b from-[#FFBE2E] to-[#E6A500] p-6 rounded-xl shadow-lg max-w-xs text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//       <img 
//         src={image} 
//         alt={title} 
//         className="w-full h-44 object-cover rounded-lg shadow-md transition-all duration-300 hover:shadow-xl" 
//       />
//       <h3 className="text-2xl font-bold text-gray-800 mt-4">{title}</h3>
//       <p className="text-gray-700 mt-2">{description}</p>
//     </div>
//   );
// };

// export default ServiceCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ id, image, title, description }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-80 bg-white shadow-lg rounded-lg cursor-pointer transform hover:scale-105 transition duration-300"
      onClick={() => navigate(`/services/${id}`)} // ✅ Ensure correct navigation
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
