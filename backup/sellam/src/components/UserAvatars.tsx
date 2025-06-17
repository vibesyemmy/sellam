import React from 'react';

interface UserAvatarsProps {
  className?: string;
}

const UserAvatars: React.FC<UserAvatarsProps> = ({ className }) => {
  const avatarCount = 5;
  
  const generatePlaceholderAvatars = () => {
    return Array.from({ length: avatarCount }).map((_, index) => (
      <div key={index} className="avatar" style={{ backgroundColor: getRandomColor() }} />
    ));
  };
  
  const getRandomColor = () => {
    const colors = ['#FFB6C1', '#ADD8E6', '#98FB98', '#DDA0DD', '#FAFAD2', '#F0E68C'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div className={`avatar-group ${className || ''}`}>
      {generatePlaceholderAvatars()}
    </div>
  );
};

export default UserAvatars; 