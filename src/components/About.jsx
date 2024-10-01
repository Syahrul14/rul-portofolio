import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import astronautImage from '../assets/astronaut.png';

const About = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      className="h-auto flex items-center justify-center bg-indigo-950 text-white mt-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto text-center">
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-3xl lg:text-5xl font-bold">🧑‍🚀 About Me</h1>
        </motion.div>
        <div className="px-4">
          <motion.p className="text-2xl mb-8" variants={itemVariants}>
            Hello! I Am <span className="text-rose-500 font-bold">Syahrul Rizal</span>
          </motion.p>
          <motion.div className="flex gap-3 justify-center items-center" variants={itemVariants}>
            <div className="w-full sm:w-32 md:w-48 lg:w-64">
              <img src={astronautImage} alt="" className="w-full" />
            </div>
            <div>
              <p className="text-lg">A Designer who</p>
              <h1 className="text-2xl mt-2">
                Judges a Book by its{" "}
                <span className="text-rose-500 font-bold inline-block custom-cover">
                  cover
                </span>
                ...
              </h1>
              <p className="mt-3">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </motion.div>
          <motion.div className="mt-20" variants={itemVariants}>
            <h1 className="text-5xl font-bold">I'm a Software Engineer</h1>
            <p className="mt-8">
              Hello, I am a software developer with a passion for technology.
              I have experience in web development using PHP frameworks like
              Laravel, as well as JavaScript frameworks such as React.js and
              Vue.js. Currently, I am more interested in frontend engineering,
              creating interactive and engaging interfaces to provide the best
              user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;