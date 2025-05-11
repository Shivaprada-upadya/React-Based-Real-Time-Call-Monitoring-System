import React, { createContext, useState, useContext } from 'react';

const CallContext = createContext();

export const useCallContext = () => {
  return useContext(CallContext);
};

export const CallProvider = ({ children }) => {
  const [callData, setCallData] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // You can add methods here to update the call data or add new notifications
  const addCallData = (newData) => {
    setCallData((prevData) => [...prevData, newData]);
  };

  const addNotification = (message) => {
    setNotifications((prevNotifications) => [...prevNotifications, message]);
  };

  return (
    <CallContext.Provider value={{ callData, notifications, addCallData, addNotification }}>
      {children}
    </CallContext.Provider>
  );
};
