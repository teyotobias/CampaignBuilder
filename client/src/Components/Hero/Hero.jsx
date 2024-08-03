import React from "react";
import HeroForm from "./HeroForm";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative md:h-full bg-blue-400">
      <div
        className={`flex flex-col justify-center transition-all sm:slant-section clip relative md:absolute sm:px-12 sm:pb-24 sm:pt-12 md:h-full max-w-[38rem] w-full z-10 text-white bg-gradient-to-tr from-sky-900 via-sky-700 to-yellow-300`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-12 sm:p-0"
        >
          <img
            src="/assets/SamanthaHall_Logo_reversed.png"
            alt="Logo"
            width={150}
            height={150}
            className="mb-7"
          />
          <h1 className="text-4xl sm:text-2xl font-extrabold mb-3">
            STAY IN TOUCH WITH SAMANTHA
          </h1>
          <HeroForm />
        </motion.div>
      </div>
      <div className="flex-1 hidden md:block">
        <img
          src="/assets/hero.png"
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
