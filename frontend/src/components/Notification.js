import React from 'react';

const Notification = ({ message, type }) => {
  const notificationStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: type === 'success' ? '#4caf50' : '#f44336',
  };

  return (
    <div style={notificationStyle} className="notification">
      {message}
    </div>
  );
};

export default Notification;