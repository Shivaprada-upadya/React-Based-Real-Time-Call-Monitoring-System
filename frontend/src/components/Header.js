import React, { useState, useEffect } from 'react';
import useWebSocket from '../hooks/useWebSocket';

const CallMonitor = () => {
  const { messages } = useWebSocket('ws://localhost:8080/ws/calls');
  const [callData, setCallData] = useState([]);

  useEffect(() => {
    setCallData(messages);
  }, [messages]);

  return (
    <div>
      <h2>Live Calls</h2>
      <ul>
        {callData.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default CallMonitor;