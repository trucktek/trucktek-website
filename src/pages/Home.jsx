import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your existing images
import ftlImage from "../assets/ftl.jpg";
import ptlImage from "../assets/ptl.jpeg";
import warehouseImage from "../assets/warehouse.jpg";
import distributionImage from "../assets/shipment.png";
import reverseLogisticsImage from "../assets/reverse-logistic.jpg";
import coldStorageTransportImage from "../assets/cold-storage-transport.jpeg";
import coldStorageImage from "../assets/cold-storage.jpg";
import odcImage from "../assets/odc.jpg";
import truckBackground from "../assets/ftl.jpg";
import networkImage from "../assets/map.jpg";


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${truckBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-5xl font-extrabold tracking-wide animate-fade-in">
            Reliable Logistics & Transport Solutions
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Delivering commitments with speed, safety, and efficiency.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-block bg-[#FFBE2E] text-lg px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* About TruckTek */}
      <section className="container mx-auto my-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About TruckTek</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          TruckTek specializes in seamless logistics solutions for manufacturing industries. 
          Our expertise in **timely delivery, real-time tracking, and cost efficiency** sets us apart as a trusted transport partner across India.
        </p>
      </section>

      {/* Our Services - Swiper Slider */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Our Services</h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-8"
          >
            {[
              { title: "Full Truck Load (FTL)", desc: "Dedicated truck service ensuring direct, fast, and safe delivery for large shipments.", img: ftlImage },
              { title: "Part Truck Load (PTL)", desc: "Cost-effective transport solution for businesses needing shared truck space.", img: ptlImage },
              { title: "Warehousing & Distribution", desc: "Secure storage, inventory management, and last-mile delivery services.", img: warehouseImage },
              { title: "Distribution", desc: "Reliable last-mile delivery network.", img: distributionImage },
              { title: "Reverse Logistics", desc: "Efficient returns and recycling solutions.", img: reverseLogisticsImage },
              { title: "Cold Storage-Transportation", desc: "Specialized transport for temperature-sensitive goods.", img: coldStorageTransportImage },
              { title: "Cold Storage-Warehousing", desc: "Temperature-controlled storage for perishable goods.", img: coldStorageImage },
              { title: "ODC", desc: "Expert-Over Dimensional Cargo handling.", img: odcImage },
            ].map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={service.img} alt={service.title} className="w-full h-48 object-cover"/>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link to="/services" className="bg-[#FFBE2E] text-lg px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="bg-gray-200 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Network</h2>
        <p className="mt-4 text-gray-600">We operate across India with a strong logistics network ensuring fast and efficient transport solutions.</p>
        <img 
          src= {networkImage}
          alt="Network Map" 
          className="mt-6 mx-auto rounded-lg shadow-lg w-2/3"
        />
      </section>

      {/* Why Choose Us? */}
      <section className="container mx-auto my-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose TruckTek?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "24/7 Operations", desc: "We operate round the clock to ensure your goods are always on the move." },
            { title: "Live Tracking", desc: "Real-time GPS tracking for complete shipment visibility and security." },
            { title: "Trusted by Businesses", desc: "Leading manufacturers trust TruckTek for their transportation needs." },
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFBE2E] text-white text-center py-12">
        <h2 className="text-3xl font-bold">Get a Quote Today</h2>
        <p className="mt-2 opacity-90">Need a transport partner? Get in touch for a customized solution.</p>
        <Link to="/contact-us" className="mt-4 inline-block bg-white text-[#FFBE2E] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;

