import { useEffect } from 'react';
import { useCallContext } from '../context/CallContext';

const useWebSocket = () => {
  const { addCallData, addNotification } = useCallContext();

  useEffect(() => {
    // Replace with your actual WebSocket server URL
    const socket = new WebSocket('ws://localhost:8080/calls');

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      
      // Handle incoming message (call data or notification)
      if (message.type === 'call_data') {
        addCallData(message.data);
      } else if (message.type === 'notification') {
        addNotification(message.message);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      socket.close();
    };
  }, [addCallData, addNotification]);
};

export default useWebSocket;
