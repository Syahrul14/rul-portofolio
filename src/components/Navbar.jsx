import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Pastikan setiap bagian memiliki tag <section>
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Set active link sesuai ID section yang terlihat
        }
      });
    }, {
      threshold: 0.5 // Ubah nilai ini untuk mengatur berapa banyak bagian yang harus terlihat untuk dianggap "aktif"
    });

    sections.forEach(section => {
      observer.observe(section); // Mengamati setiap section
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section); // Membersihkan observer saat komponen unmount
      });
    };
  }, []);

  const handleScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(target); // Set active link saat di klik
    }
  };

  return (
    <header className="fixed mt-3 top-0 left-0 right-0 flex justify-between items-center text-white
      py-1 px-2 md:py-2 md:px-4 lg:py-4 lg:px-8 bg-white bg-opacity-25 backdrop-blur-sm shadow-lg drop-shadow-md rounded-full 
      w-full max-w-md md:max-w-5xl mx-auto z-10">
      <ul className="flex items-center gap-4 font-semibold text-xs md:text-sm lg:text-base mx-auto">
        <li
          onClick={() => handleScroll("home")}
          className={`p-2 transition-all cursor-pointer ${activeLink === "home" ? "text-red-500" : "hover:text-red-500"}`}
        >
          Home
        </li>
        <li
          onClick={() => handleScroll("about")}
          className={`p-2 transition-all cursor-pointer ${activeLink === "about" ? "text-red-500" : "hover:text-red-500"}`}
        >
          About
        </li>
        <li
          onClick={() => handleScroll("experience")}
          className={`p-2 transition-all cursor-pointer ${activeLink === "experience" ? "text-red-500" : "hover:text-red-500"}`}
        >
          Experience
        </li>
        <li
          onClick={() => handleScroll("projects")}
          className={`p-2 transition-all cursor-pointer ${activeLink === "projects" ? "text-red-500" : "hover:text-red-500"}`}
        >
          Project
        </li>
        <li
          onClick={() => handleScroll("contact")}
          className={`p-2 transition-all cursor-pointer ${activeLink === "contact" ? "text-red-500" : "hover:text-red-500"}`}
        >
          Contact
        </li>
      </ul>
    </header>
  );
};

export default Navbar;