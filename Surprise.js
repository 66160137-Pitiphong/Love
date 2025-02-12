// pages/Surprise.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Surprise = () => (
  <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl text-pink-500">เหตุผลที่รักเธอ 💕</h1>
    <p>1. เธอน่ารักที่สุด</p>
    <p>2. เธอเป็นกำลังใจของเรา</p>
    <p>3. อยู่กับเธอแล้วมีความสุข</p>
    <Link to="/" className="button">กลับหน้าแรก</Link>
  </motion.div>
);

export default Surprise;