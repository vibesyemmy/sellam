import React from 'react';
import { IMAGES } from '../constants/images';

interface DownloadButtonsProps {
  className?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ className }) => {
  return (
    <div className={`flex gap-md ${className || ''}`}>
      <a href="#" title="Download on App Store">
        <img 
          src={IMAGES.APP_STORE} 
          alt="Download on App Store"
          className="download-btn"
        />
      </a>
      <a href="#" title="Get it on Google Play">
        <img 
          src={IMAGES.PLAY_STORE} 
          alt="Get it on Google Play"
          className="download-btn"
        />
      </a>
    </div>
  );
};

export default DownloadButtons; 