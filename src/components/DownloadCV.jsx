import React from 'react';
import { Tilt } from 'react-tilt';

const DownloadCV = () => {
  return (
    <Tilt
      className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-5"
      options={{ max: 25, scale: 1.05, speed: 400 }}
    >
      <div className="text-center">
        
        
        <a
          href="/PDF/CV_Sikanou_Sami.pdf" // Remplace par le chemin de ton CV
          download="CV_Sikanou_Sami.pdf"
          className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Télécharger mon CV
        </a>
      </div>
    </Tilt>
  );
};

export default DownloadCV;
