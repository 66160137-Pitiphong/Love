// pages/Gallery.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Gallery = () => (
  <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl text-pink-500">แกลเลอรีความทรงจำ 💖</h1>
    <div className="grid grid-cols-2 gap-4">
      <img src="https://source.unsplash.com/300x300/?love" alt="love" className="rounded-xl shadow-md" />
      <img src="https://source.unsplash.com/300x300/?couple" alt="couple" className="rounded-xl shadow-md" />
    </div>
    <Link to="/" className="button">กลับหน้าแรก</Link>
  </motion.div>
);

export default Gallery;
