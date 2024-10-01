import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import spkImage from '../assets/spk.png';
import movieImage from '../assets/movie.png';
import palImage from '../assets/pal.png';
import expenseImage from '../assets/expense.png';
import rulfreelancerImage from '../assets/rulfreelancer.png';

const Project = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const projects = [
    {
      title: 'Decision Support Systems',
      description: 'Project to create a decision support system application using the TOPSIS method in PHP.',
      image: spkImage,
      url: 'https://github.com/Syahrul14/SPK_TOPSIS',
    },
    {
      title: 'Movie App',
      description: 'Creating a Movie App using React JS with the API from www.themoviedb.org.',
      image: movieImage,
      url: 'https://rul-movie-app.web.app/',
    },
    {
      title: 'Web Company Profile',
      description: 'Project to create a company profile website for PT Propertindo Alam Lestari using CodeIgniter 3.',
      image: palImage,
      url: 'https://propertindoalamlestari.co.id/',
    },
    {
      title: 'Expense Tracker',
      description: 'Creating an Expense Tracker App with React JS.',
      image: expenseImage,
      url: 'https://rul-expense-tracker.web.app/',
    },
    {
      title: 'Landing Page Rul Freelancer',
      description: 'Creating a landing page project using React JS for Rul Freelancer.',
      image: rulfreelancerImage,
      url: 'https://rulfreelancer.web.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="container mx-auto px-4 py-8 mt-20"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <h2 className="text-3xl font-bold mb-8 text-red-500">👷 My Projects</h2>
      <p className="text-white mb-10 lg:w-2/5">
        I understand that completing a task well is important, but sharing our experiences and achieving success together is far more valuable.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url} // Pass the URL to ProjectCard
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Project;