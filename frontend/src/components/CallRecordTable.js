import React from 'react';

const CallRecordTable = ({ records }) => {
  return (
    <table className="call-record-table">
      <thead>
        <tr>
          <th>Caller ID</th>
          <th>Receiver ID</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Duration (s)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.callerId}</td>
            <td>{record.receiverId}</td>
            <td>{record.startTime}</td>
            <td>{record.endTime}</td>
            <td>{record.duration}</td>
            <td>{record.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CallRecordTable;