import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Sections";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className="relative dark:bg-bg-dark">
      <Header />
      <main className="relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollUpButton />
                <Hero />
                <PopularProducts />
                <SuperQuality />
                <Services />
                <SpecialOffer />
                <CustomerReviews />
                <Subscribe />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
