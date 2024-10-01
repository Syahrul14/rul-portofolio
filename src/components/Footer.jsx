const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 backdrop-blur-lg bg-opacity-50 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Syahrul Rizal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;