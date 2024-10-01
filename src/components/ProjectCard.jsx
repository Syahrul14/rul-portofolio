import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, image, url }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative w-full h-50 bg-gray-100 flex items-center justify-center group">
        <img className="object-contain h-full" src={image} alt={`${title} mockup`} />
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-2 rounded-full flex items-center">
              <FontAwesomeIcon icon={faEye} className="text-black" />
            </div>
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;