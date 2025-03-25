import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { curveCardinal } from 'd3-shape';

const NetWorthCharts = ({ id }) => {
  const data = [
    { year: 1, Value: 4000, Dept: 7000 },
    { year: 2, Value: 50000, Dept: 6000 },
    { year: 3, Value: 2000, Dept: 5000 },
    { year: 4, Value: 15000, Dept: 3000 },
    { year: 5, Value: 28888, Dept: 2000 },
    { year: 6, Value: 4000, Dept: 1000 },
    { year: 7, Value: 1000, Dept: 500 },
    { year: 8, Value: 7000, Dept: 2000 },
    { year: 9, Value: 8000, Dept: 1000 },
    { year: 10, Value: 10000, Dept: 500 },
    { year: 11, Value: 5675, Dept: 7000 },
    { year: 12, Value: 2323, Dept: 6000 },
    { year: 13, Value: 6865, Dept: 5000 },
    { year: 14, Value: 2323, Dept: 3000 },
    { year: 15, Value: 54355, Dept: 2000 },
    { year: 16, Value: 60000, Dept: 1000 },
    { year: 17, Value: 10000, Dept: 500 },
    { year: 18, Value: 7000, Dept: 2000 },
    { year: 19, Value: 8000, Dept: 1000 },
    { year: 20, Value: 60000, Dept: 500 },
    { year: 21, Value: 20000, Dept: 4400 },
    { year: 22, Value: 7000, Dept: 9900 },
    { year: 23, Value: 2000, Dept: 500 },
    { year: 24, Value: 9000, Dept: 54500 },
    { year: 25, Value: 10000, Dept: 3600 },
    { year: 26, Value: 10000, Dept: 56500 },
    { year: 27, Value: 17000, Dept: 76600 },
    { year: 28, Value: 40000, Dept: 54500 },
    { year: 29, Value: 30000, Dept: 500 },
    { year: 30, Value: 10000, Dept: 45500 },
  ];

  // Multiply the values by the provided id to make the chart dynamic
  const updatedData = data.map((item) => ({
    ...item,
    Value: item.Value * id,
    Dept: item.Dept * id,
    NetWorth: (item.Value - item.Dept) * id,
  }));

  const cardinal = curveCardinal.tension(0.2);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={updatedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        {/* Value */}
        <Area
          type={cardinal}
          dataKey="Value"
          stroke="#118d57"
          fill="rgba(17, 141, 87, 0.5)"
          fillOpacity={0.5}
        />
        {/* Dept */}
        <Area
          type={cardinal}
          dataKey="Dept"
          stroke="#fea11f"
          fill="rgba(254, 161, 31, 0.5)"
          fillOpacity={0.5}
        />
        {/* Net Worth */}
        <Area
          type={cardinal}
          dataKey="NetWorth"
          stroke="#0061F2"
          fill="rgba(0, 97, 242, 0.5)"
          fillOpacity={0.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default NetWorthCharts;
