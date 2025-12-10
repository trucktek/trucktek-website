// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetails"; // ✅ Ensure this is imported
// import ContactUs from "./pages/ContactUs";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about-us" element={<AboutUs />} />
//           <Route path="services" element={<Services />} />
//           <Route path="services/:id" element={<ServiceDetail />} /> {/* ✅ Ensure this is correct */}
//           <Route path="contact-us" element={<ContactUs />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetails";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
