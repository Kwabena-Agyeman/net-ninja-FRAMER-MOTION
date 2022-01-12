/** @format */

import React from "react";
import { Link, Route } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div animate={{}} className='home container'>
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to='/base'>
        <motion.button animate={{}}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
