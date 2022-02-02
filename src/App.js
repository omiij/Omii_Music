import React, { useState } from "react";
import Artis from "./Artist/Artist";
import Login from "./Form/Login";

// import {} from "../src/Data/All_Data";
import Navbar from "./Navbar/Navbar";
// import { Routes, Route, Router, Switch } from "react-router-dom";
import { HashRouter, Route, Router, Routes, Switch } from "react-router-dom";
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
<<<<<<< HEAD
          <Navbar handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<Artis />} />
            <Route path="/Pitsong" element={<Pitbull />} />
            <Route path="/Jenisong" element={<JeniferL />} />
            <Route path="/Radfoosong" element={<RadfooS />} />
            <Route path="/Maroonsong" element={<MaroonS />} />
            <Route path="/Alexasong" element={<AlexandraS />} />
            <Route path="/Akcentsong" element={<AkcentS />} />
            <Route path="/Dadyyankeesong" element={<DaddyYS />} />
            <Route path="/about" element={<About />} />
            <Route path="/Jubinsong" element={<JubinS />} />
            <Route path="/Taylorsong" element={<TaylorS />} />
            <Route path="/Brunosong" element={<BrunoS />} />
            <Route path="/Kishorkumarsong" element={<KishorS />} />
            <Route path="/Puthsong" element={<CharliS />} />
          </Routes>

          {/* <Navbar handleLogout={handleLogout} />
=======
           <Navbar handleLogout={handleLogout} />

>>>>>>> f830736be0f3478927c6b41d018fc5e29ca26e88
          <Routes>
            <Route path="/" element={<Artis />} />
            <Route path="/Pitsong" element={<Pitbull />} />
            <Route path="/Jenisong" element={<JeniferL />} />
            <Route path="/Radfoosong" element={<RadfooS />} />
            <Route path="/Maroonsong" element={<MaroonS />} />
            <Route path="/Alexasong" element={<AlexandraS />} />
            <Route path="/Akcentsong" element={<AkcentS />} />
            <Route path="/Dadyyankeesong" element={<DaddyYS />} />
            <Route path="/about" element={<About />} />
<<<<<<< HEAD
          </Routes> */}
=======
            <Route path="/Jubinsong" element={<JubinS />} />
            <Route path="/Taylorsong" element={<TaylorS />} />
            <Route path="/Brunosong" element={<BrunoS />} />
            <Route path="/Kishorkumarsong" element={<KishorS />} />
            <Route path="/Puthsong" element={<CharliS />} />
          </Routes
       
//           <Navbar handleLogout={handleLogout} />
//           <Routes>
//             <Route path="/" element={<Artis />} />
//           </Routes>
//           <Routes>
//             <Route path="/Pitsong" element={<Pitbull />} />
//           </Routes>
//           <Routes>
//             <Route path="/Jenisong" element={<JeniferL />} />
//           </Routes>
//           <Routes>
//             <Route path="/Radfoosong" element={<RadfooS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Maroonsong" element={<MaroonS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Alexasong" element={<AlexandraS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Akcentsong" element={<AkcentS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Dadyyankeesong" element={<DaddyYS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Kishorkumarsong" element={<KishorS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Puthsong" element={<CharliS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Brunosong" element={<BrunoS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Taylorsong" element={<TaylorS />} />
//           </Routes>
//           <Routes>
//             <Route path="/Jubinsong" element={<JubinS />} />
//           </Routes>
//           <Routes>
//             <Route path="/about" element={<About />} />
//           </Routes>
>>>>>>> f830736be0f3478927c6b41d018fc5e29ca26e88
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

{
  /* <Navbar handleLogout={handleLogout} />
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
</Routes> */
}
