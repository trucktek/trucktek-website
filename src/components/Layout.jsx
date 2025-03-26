import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* This will render the page content dynamically */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
