// Import images
import ftlImage from "../assets/ftl.jpg";
import ptlImage from "../assets/ptl.jpeg";
import warehouseImage from "../assets/warehouse.jpg";
import distributionImage from "../assets/shipment.png";
import reverseLogisticsImage from "../assets/reverse-logistic.jpg";
import coldStorageTransportImage from "../assets/cold-storage-transport.jpeg";
import coldStorageImage from "../assets/cold-storage.jpg";
import odcImage from "../assets/odc.jpg"; // Ensure you have the image file


const servicesData = [
  {
    id: "ftl",
    title: "Full Truck Load (FTL)",
    description: "Dedicated trucks for your bulk shipments.",
    fullDescription:
      "FTL offers a full truck exclusively for your shipments, ensuring faster delivery with no intermediate stops. Ideal for businesses needing a direct, secure, and efficient transport solution.",
    image: ftlImage,
  },
  {
    id: "ptl",
    title: "Partial Truck Load (PTL)",
    description: "Cost-effective shared truck space for smaller loads.",
    fullDescription:
      "PTL is an affordable solution for shipments that don't require a full truck. We consolidate goods from different businesses, optimizing transport costs and delivery efficiency.",
    image: ptlImage,
  },
  {
    id: "warehousing",
    title: "Warehousing",
    description: "Safe storage and inventory management solutions.",
    fullDescription:
      "Our state-of-the-art warehouses provide storage, inventory tracking, and distribution services, ensuring your goods are always secure and ready for dispatch.",
    image: warehouseImage,
  },
  {
    id: "distribution",
    title: "Distribution",
    description: "Reliable last-mile delivery network.",
    fullDescription:
      "We ensure seamless last-mile delivery, efficiently connecting businesses to customers with a reliable and well-planned distribution network.",
    image: distributionImage,
  },
  {
    id: "reverse-logistics",
    title: "Reverse Logistics",
    description: "Efficient returns and recycling solutions.",
    fullDescription:
      "Our reverse logistics services help businesses manage returns efficiently, optimizing cost recovery and sustainable recycling processes.",
    image: reverseLogisticsImage,
  },
  {
    id: "cold-storage-transport",
    title: "Cold Storage-Transportation",
    description: "Specialized transport for temperature-sensitive goods.",
    fullDescription:
      "Our temperature-controlled transport solutions ensure perishable goods reach their destination in perfect condition, maintaining quality and compliance.",
    image: coldStorageTransportImage,
  },
  {
    id: "cold-storage",
    title: "Cold Storage-Warehousing",
    description: "Temperature-controlled storage for perishable goods.",
    fullDescription:
      "We offer modern cold storage facilities to preserve the freshness of perishable items, ensuring a longer shelf life and quality assurance.",
    image: coldStorageImage,
  },
  {
    id: "odc",
    title: "Over Dimensional Cargo (ODC)",
    description: "Transportation for oversized and heavy cargo.",
    fullDescription:
      "Our ODC transportation services handle oversized and heavy cargo that exceeds standard dimension limits. We ensure proper route planning, permits, and safety measures to deliver your cargo efficiently.",
    image: odcImage,
  },
];

export default servicesData;
