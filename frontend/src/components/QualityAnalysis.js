import React from 'react';
import { Line } from 'react-chartjs-2';

const QualityAnalysis = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.timestamp),
    datasets: [
      {
        label: 'Call Quality',
        data: data.map(item => item.qualityScore),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Call Quality Over Time',
      },
    },
  };

  return (
    <div className="quality-analysis">
      <h2>Call Quality Analysis</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default QualityAnalysis;
