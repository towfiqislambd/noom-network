import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

// Default data (can be dynamically adjusted based on the id)
const defaultData = [
  { name: 'Category A', value: 30 },
  { name: 'Category B', value: 25 },
  { name: 'Category C', value: 20 },
  { name: 'Category D', value: 25 },
];

// Colors for the pie chart segments
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnnualReturnCharts = ({ id }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);
  const [chartData, setChartData] = useState(defaultData);

  // Dynamically adjust data based on `id`
  useEffect(() => {
    const updatedData = defaultData.map((item) => ({
      ...item,
      value: item.value * id, // Dynamically scale the value by `id`
    }));
    setChartData(updatedData);
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <PieChart
        width={isSmallScreen ? 235 : 400}
        height={isSmallScreen ? 235 : 400}
      >
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={isSmallScreen ? 40 : 70}
          outerRadius={isSmallScreen ? 60 : 110}
          dataKey="value"
          label={({ percent, x, y }) => (
            <text
              x={x}
              y={y}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={13}
              fontWeight="bold"
            >
              {(percent * 100).toFixed(0)}%
            </text>
          )}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          align={isSmallScreen ? 'center' : 'right'}
          verticalAlign={isSmallScreen ? 'bottom' : 'middle'}
        />
      </PieChart>
    </div>
  );
};

export default AnnualReturnCharts;
