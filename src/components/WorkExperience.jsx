import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const WorkExperience = () => {
  const itemRefs = useRef([]);
  const controls = useAnimation();

  const experiences = [
    {
      company: "PT Tribuana Global Group",
      position: "Full Stack Developer",
      period: "May 2023 - Aug 2024, Fulltime",
      description: "Developed and maintained a CMS with CodeIgniter 3, built HRIS and ERP applications using Laravel and Vue.js, and designed new modules for these systems.",
    },
    {
      company: "Digitalent Scholarship Kominfo Batch 1 X Progate",
      position: "Frontend Developer - Progate",
      period: "Mar 2023 - Apr 2023, Internship",
      description: "Mastered responsive web design, applied flexbox, and developed websites collaboratively in a team.",
    },
    {
      company: "Yayasan Anak Bangsa Bisa",
      position: "Frontend Engineer - Generasi GIGIH 2.0 by YABB & GoTo Mar 2022",
      period: "Mar 2022 - Juli 2022, Internship",
      description: "Developed the Capstone Project Jofer utilizing React JS, focusing on creating a dynamic and interactive user interface, while applying best practices in front-end development to ensure scalability and maintainability.",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Menunda kemunculan setiap anak (elemen) sebesar 0.3 detik
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Mengatur jeda antara setiap elemen
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.getAttribute('data-index');
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      });
    }, { threshold: 0.1 });

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [controls]);


  return (
    <section id="experience" className="container mx-auto py-10 px-4 mt-8">
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-3xl text-rose-500 font-bold mb-8">🏢 Work Experience</h2>
        <p className="text-white mb-10 lg:w-2/5">
          I have experience working as a software engineer, including projects in web application development as a full-stack and frontend developer.
        </p>
      </motion.div>
      <motion.div
        className="relative border-l border-gray-300 ml-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-8"
            variants={itemVariants}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
          >
            <div className="absolute w-4 h-4 bg-rose-500 rounded-full -left-8 top-0 transform -translate-x-1/2 -translate-y-1/2 border border-white"></div>
            <p className="text-sm text-yellow-500">{exp.period}</p>
            <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
            <h4 className="text-lg font-medium text-blue-500">{exp.company}</h4>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;