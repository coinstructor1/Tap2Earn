
import "./UserTicker.css";

import React from 'react';

interface UserTickerProps {
  user: { name: string; image: string };
}

const UserTicker: React.FC<UserTickerProps> = ({ user }) => {
   return (
      <div className="user-ticker">
        <img src={user.image} alt="Default User" className="user-image" />
        <h3 className="user-name">{user.name}</h3>
      </div>
    );
};


export default UserTicker;
