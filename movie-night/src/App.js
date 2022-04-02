import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Details from "./Pages/Details";
import 'swiper/swiper.min.css';

function App() {
  return (
    <BrowserRouter>

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/search/:keyword" element={<Catalog />} />
          <Route path="/:category" element={<Catalog />} />
          <Route path="/:category/:id" element={<Details />} />
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
