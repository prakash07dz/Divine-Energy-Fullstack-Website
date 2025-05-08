import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Projects from "./components/pages/Projects";
import Testimonials from "./components/pages/Testimonial";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import Subsidy from "./components/pages/Subsidy";
import ApplySubsidy from "./components/pages/ApplySubsidy";
import AdminLogin from "./components/admin/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import AdminDashboard from "./components/admin/Dashboard";
import BlogDetails from "./components/pages/BlogDetails";

function Layout() {
  const location = useLocation();

  // Hide Navbar and Footer for specific pages
  const hideHeaderFooter = [
    "/apply-subsidy",
    "/admin-login",
    "/admin-dashboard",
    "/blog/:id",
  ].some((path) => location.pathname.startsWith(path.replace(":id", "")));

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Subsidy />
                <Products />
                <Projects />
                <Testimonials />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/apply-subsidy" element={<ApplySubsidy />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
