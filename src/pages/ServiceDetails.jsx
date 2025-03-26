// import React from "react";
// import { useParams } from "react-router-dom";
// import servicesData from "../data/servicesData";

// const ServiceDetails = () => {
//     console.log(servicesData);  
//     const { serviceId } = useParams(); // Get dynamic service ID from URL
//     const service = servicesData.find((s) => s.id === serviceId);
  

//     if (!service) {
//         return <h2 className="text-center text-red-500 mt-10">Service Not Found</h2>;
//     }

//     return (
//         <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
//         <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-64 object-cover rounded-md"
//         />
//         <h1 className="text-3xl font-bold text-center mt-4">{service.title}</h1>
//         <p className="text-gray-700 text-lg mt-4">{service.fullDescription}</p>
//         </div>
//     );
// };

// export default ServiceDetails;



// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import servicesData from "../data/servicesData.js";

// const ServiceDetail = () => {
//   const { id } = useParams(); // ✅ Get the service ID from the URL
//   const navigate = useNavigate();

//   // ✅ Find the selected service
//   const service = servicesData.find((s) => s.id === id);

 
//   // ✅ If service is not found, show an error message
//   if (!service) {
//     return <p className="text-center text-red-500 text-lg mt-10">Service not found!</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24">
//   <h1 className="text-3xl font-bold text-center">{service.title}</h1>

//   <div className="flex justify-center mt-4">
//     <img
//       src={service.image}
//       alt={service.title}
//       className="w-full max-h-[400px] object-contain rounded-lg shadow-md"
//     />
//   </div>

//   <p className="mt-4 text-gray-700 text-lg">{service.fullDescription}</p>

//   <div className="text-center mt-6">
//     <button
//       onClick={() => navigate(-1)}
//       className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
//     >
//       ← Back to Services
//     </button>
//   </div>
// </div>


//   );
// };

// export default ServiceDetail;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData.js";

const ServiceDetail = () => {
  const { id } = useParams(); // Get service ID from URL
  const navigate = useNavigate();

  // Find the selected service
  const service = servicesData.find((s) => s.id === id);

  // If service is not found, show an error message
  if (!service) {
    return <p className="text-center text-red-500 text-lg mt-10">Service not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24 mb-16">
      {/* Service Image */}
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Service Title */}
      <h1 className="text-3xl font-bold text-center mt-6">{service.title}</h1>

      {/* Service Description */}
      <p className="mt-4 text-gray-700 text-lg text-center">{service.fullDescription}</p>

      {/* Back to Services Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#FFBE2E] text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
        >
          ← Back to Services
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
