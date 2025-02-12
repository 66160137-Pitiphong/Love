import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-4xl font-bold text-pink-600">สวัสดีที่รัก ❤️</h1>
    <p className="text-lg">ยินดีต้อนรับสู่เว็บแห่งความรักของเรา</p>
    <nav className="nav">
      <Link to="/surprise" className="button">เซอร์ไพรส์ 🎁</Link>
      <Link to="/gallery" className="button">แกลเลอรี 📸</Link>
      <Link to="/song" className="button">เพลงรัก 🎶</Link>
    </nav>
  </motion.div>
);

export default Home;
