import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/Login";
import CustomSolo from "./pages/CustomSolo";
import RankFlip from "./pages/RankFlip";
import Skin from "./pages/Skin";
import Rank from "./pages/Rank";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<CustomSolo />} />
              <Route path="/rankflip" element={<RankFlip />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/skin" element={<Skin />} />
              <Route path="*" element={<CustomSolo />} />
            </>
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
