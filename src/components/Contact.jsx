import { motion } from "framer-motion";
import astronautImage from '../assets/astronaut.png';
import gmailImage from '../assets/gmail.svg';
import instagramImage from '../assets/instagram.svg';

const Contact = () => {
  return (
    <section id="contact" className="h-auto container mx-auto py-10 px-4">
      <motion.h1 
        className="text-3xl text-red-500 font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🍻 Let's Get Connected
      </motion.h1>
      <motion.p 
        className="text-white lg:w-2/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Got any exciting project ideas? Or just want to have a chat? Feel free to reach out! I'm always open to new opportunities and collaborations.
      </motion.p>
      <motion.div 
        className="flex gap-3 items-center border-2 border-white shadow-lg rounded-lg bg-black bg-transparent py-7 mt-8 lg:w-2/5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.img 
          src={astronautImage} 
          alt="" 
          className="relative top-4 w-20 lg:w-1/3"
          initial={{ rotate: -10 }}
          whileInView={{ rotate: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
        />
        <div>
          <h1 className="text-white font-bold">Contact Me On: </h1>
          <div className="flex items-center gap-3 mt-3">
            <img src={gmailImage} alt="Gmail" className="text-white w-6" />
            <p className="text-white">syahrul.rizal258@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <img src={instagramImage} alt="Instagram" className="text-white w-6" />
            <p className="text-white">@syahrul_rizal14</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;