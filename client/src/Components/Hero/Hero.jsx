import React from "react";
import HeroForm from "./HeroForm";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/hero.png')` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white p-6 bg-gradient-to-r from-sky-900 to-sky-500"
      >
        <img
          src="/assets/SamanthaHall_Logo_reversed.png"
          alt="Logo"
          className="mb-7"
          width={225}
          height={225}
        />
        <h1 className="text-4xl font-bold mb-3">STAY IN TOUCH WITH SAMANTHA</h1>
        <HeroForm />
      </motion.div>
    </div>
  );
}
