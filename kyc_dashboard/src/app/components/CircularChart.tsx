'use client';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircularChart({ circularChart }: any) {
  const obj = circularChart.solicited;
  const data = {
    labels: ['Received', 'Consumed', 'Pending', 'Other'],
    datasets: [
      {
        label: 'PANs',
        data: [obj.received, obj.consumed, obj.pending, Math.max(0, obj.total - (obj.received + obj.consumed + obj.pending))],
        backgroundColor: ['#16a34a', '#0ea5e9', '#ff6b6b', '#c7d2fe'],
        borderWidth: 0
      }
    ]
  };

  const options = {
    cutout: '65%',
    responsive: true,
    plugins: {
      legend: { position: 'right' as const, labels: { boxWidth: 12 } }
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-40 h-40">
        <Doughnut data={data} options={options} />
      </div>
      <div>
        <div className="text-sm text-gray-500">Total</div>
        <div className="text-2xl font-bold">{obj.total.toLocaleString()}</div>
        <div className="mt-3 text-xs text-gray-500">
          <div><span className="inline-block w-2 h-2 bg-[#16a34a] mr-2" /> Received</div>
          <div><span className="inline-block w-2 h-2 bg-[#0ea5e9] mr-2" /> Consumed</div>
          <div><span className="inline-block w-2 h-2 bg-[#ff6b6b] mr-2" /> Pending</div>
        </div>
      </div>
    </div>
  );
}
