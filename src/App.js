import React, { useState } from "react";
import Artis from "./Artist/Artist";
import Login from "./Form/Login";

// import {} from "../src/Data/All_Data";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Pitbull, {
  AkcentS,
  AlexandraS,
  BrunoS,
  CharliS,
  DaddyYS,
  JubinS,
  KishorS,
  MaroonS,
  RadfooS,
  TaylorS,
} from "./Router/Route";
import JeniferL from "./Router/Route";
import { Kishor } from "./Data/All_Data";
import About from "./AboutUS/About";

function App() {
  const [userData, setUserData] = useState(
    localStorage.getItem("user") || null
  );
  function changeUserData(data) {
    setUserData(data);
    // console.log(data)
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setUserData(null);
  }

  return (
    <>
      {userData ? (
        <>
          <Navbar handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Artis />} />
          </Routes>
          <Routes>
            <Route path="/Pitsong" element={<Pitbull />} />
          </Routes>
          <Routes>
            <Route path="/Jenisong" element={<JeniferL />} />
          </Routes>
          <Routes>
            <Route path="/Radfoosong" element={<RadfooS />} />
          </Routes>
          <Routes>
            <Route path="/Maroonsong" element={<MaroonS />} />
          </Routes>
          <Routes>
            <Route path="/Alexasong" element={<AlexandraS />} />
          </Routes>
          <Routes>
            <Route path="/Akcentsong" element={<AkcentS />} />
          </Routes>
          <Routes>
            <Route path="/Dadyyankeesong" element={<DaddyYS />} />
          </Routes>
          <Routes>
            <Route path="/Kishorkumarsong" element={<KishorS />} />
          </Routes>
          <Routes>
            <Route path="/Puthsong" element={<CharliS />} />
          </Routes>
          <Routes>
            <Route path="/Brunosong" element={<BrunoS />} />
          </Routes>
          <Routes>
            <Route path="/Taylorsong" element={<TaylorS />} />
          </Routes>
          <Routes>
            <Route path="/Jubinsong" element={<JubinS />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      ) : (
        <Login changeUserData={changeUserData} />
      )}
      {/* <button href="" className="logout-linkButton" onClick={handleLogout}>
        Logout
      </button> */}
    </>
  );
}

export default App;
