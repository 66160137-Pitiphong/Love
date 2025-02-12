// pages/Song.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Song = () => (
  <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl text-pink-500">เพลงรักของเรา 🎵</h1>
    <iframe width="300" height="200" src="https://www.youtube.com/embed/JGwWNGJdvx8" title="love song" allowFullScreen></iframe>
    <Link to="/" className="button">กลับหน้าแรก</Link>
  </motion.div>
);

export default Song;