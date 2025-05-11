import React, { useEffect } from 'react';
import { useCallContext } from './context/CallContext';
import useWebSocket from './services/websocketService'; // Import WebSocket hook

function App() {
  const { callData, notifications } = useCallContext();

  useWebSocket(); // Set up WebSocket connection

  return (
    <div className="App">
      <h1>Real-Time Call Monitoring</h1>
      
      {/* Call Data Table */}
      <h2>Call Records</h2>
      <table>
        <thead>
          <tr>
            <th>Caller</th>
            <th>Receiver</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {callData.map((call, index) => (
            <tr key={index}>
              <td>{call.caller}</td>
              <td>{call.receiver}</td>
              <td>{call.duration}</td>
              <td>{call.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notifications */}
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
