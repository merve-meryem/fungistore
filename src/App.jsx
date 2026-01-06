import React from "react";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Hakkımızda from "./pages/Hakkımızda";
import Anasayfa from "./pages/Anasayfa";
import Siparis from "./pages/Siparis";
import Products from "./components/Products";
import Cart from "./components/Cart";
import KayıtOl from "./pages/KayıtOl";
import Success from "./pages/Success";
function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
          <Route path="/siparis" element={<Siparis />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<KayıtOl />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
