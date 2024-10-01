import React from 'react';
import { motion } from 'framer-motion';
import "../App.css";
import backgroundImage from '../assets/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  // Variabel untuk mengatur animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Menunda kemunculan setiap anak (elemen) sebesar 0.3 detik
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scorllVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 },
  };

  // Fungsi untuk scroll ke bawah saat tombol diklik
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <motion.div className="container mx-auto px-4 z-10 text-center" variants={itemVariants}>
        <motion.div className="flex gap-2 items-center justify-center mb-4" variants={itemVariants}>
          <span className="text-2xl text-yellow-500 relative -top-4 left-2 animate-spin-star">⭐</span>
          <h1 className="text-2xl lg:text-5xl font-bold">Hello it's me, Syahrul</h1>
          <p className="text-3xl lg:text-7xl animate-wave">👋</p>
        </motion.div>
        <motion.h1 className="text-rose-500 text-5xl lg:text-7xl font-bold mb-8" variants={itemVariants}>
          I'm a Fullstack Developer
        </motion.h1>
        <motion.p className="lg:text-2xl font-bold mb-3" variants={itemVariants}>
          2+ years of experience as a full-stack developer,
        </motion.p>
        <motion.p className="lg:text-2xl mb-8" variants={itemVariants}>
          using Laravel and JavaScript frameworks such as React.js and Vue.js for web development.
        </motion.p>
        <motion.div className="flex gap-3 justify-center items-center mb-10" variants={itemVariants}>
          <a href="https://github.com/Syahrul14">
            <div className="bg-gradient-to-r from-black to-sky-800 p-2 rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/syahrul-rizal14">
            <div className="bg-gradient-to-r from-blue-600 to-sky-800 p-2 rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
            </div>
          </a>
          <a href="https://www.instagram.com/syahrul_rizal14?igsh=MXZnNDM4bnEwb2Y1dw==">
            <div className="bg-gradient-to-r from-red-600 to-rose-800 p-2 rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
            </div>
          </a>
        </motion.div>
        <motion.a
          href="#projects"
          onClick={handleScroll}
          className="sm:w-1/2 lg:w-1/5 mx-auto flex justify-center items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500"
          animate={{
            y: [0, -10, 0], // Melompat: ke atas (-10px) dan kembali ke bawah (0)
          }}
          transition={{
            duration: 2, // Durasi animasi keseluruhan menjadi lebih lama untuk memberikan kesan lebih smooth
            repeat: Infinity, // Mengulang animasi secara terus menerus
            repeatType: "loop", // Mengulang tanpa berhenti
            ease: "easeInOut", // Menggunakan easing untuk membuat animasi lebih halus
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
          Scroll Down
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;