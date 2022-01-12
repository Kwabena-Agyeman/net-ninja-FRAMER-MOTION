/** @format */

import React from "react";
import { Link, Route } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {},
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      className='home container'
    >
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to='/base'>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{
            yoyo: Infinity,
            duration: 0.3,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
