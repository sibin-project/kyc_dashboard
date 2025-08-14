'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { TBarChart } from '../type';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function KycBarChart({ barChart }: { barChart: TBarChart }) {
  const data = {
    labels: ['Individual', 'Non-Individual'],
    datasets: [
      {
        label: 'Today',
        data: [barChart.today.individual, barChart.today.nonIndividual],
        backgroundColor: '#163a9e',
        borderRadius: 6
      },
      {
        label: 'Yesterday',
        data: [barChart.yesterday.individual, barChart.yesterday.nonIndividual],
        backgroundColor: '#cfe1ff',
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' as const } },
    scales: {
      y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="card p-4">
      <Bar data={data} options={options} />
    </div>
  );
}
