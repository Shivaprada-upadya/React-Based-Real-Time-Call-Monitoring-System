import { useState, useEffect } from 'react';

const useWebSocket = (url) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    return () => socket.close();
  }, [url]);

  return { messages };
};

export default useWebSocket;