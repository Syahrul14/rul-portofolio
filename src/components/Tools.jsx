import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photoshopIcon from '../assets/photoshop.svg';
import { faLaravel, faReact, faVuejs, faFigma, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Tools = () => {
  return (
    <section className="container mx-auto text-center mt-10">
      <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-white">🚀 Specialized Skills</h1>
      <p className="mb-8 text-white">This is the Tools I usually use for my work</p>
      <div className="col-span-12 flex flex-wrap justify-center">
        <div className="m-4">
          <FontAwesomeIcon icon={faLaravel} className="text-7xl text-red-600 animate-twinkle" />
          <p className="text-white">Laravel</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faReact} className="text-7xl text-blue-500 animate-rotate" />
          <p className="text-white">React</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faVuejs} className="text-7xl text-green-500 animate-flip-up" />
          <p className="text-white">Vue.js</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faCss3Alt} className="text-7xl text-blue-500 animate-flip" />
          <p className="text-white">CSS</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faFigma} className="text-7xl text-white animate-zoom-out" />
          <p className="text-white">Figma</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <img src={photoshopIcon} alt="Photoshop" className="w-16 h-16 animate-jump" />
          <p className="pt-2 text-white">Photoshop</p>
        </div>
      </div>
    </section>
  );
};

export default Tools;