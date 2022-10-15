import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardsCont from "./components/CardsCont";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import products from "./library";
import ErrorPage from "./components/ErrorPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardsCont />} />
          <Route path="/CardDetail/:id" element={<CardDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
