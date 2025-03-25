import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const LoanCharts = ({ id }) => {
  // Dynamic data based on `id`
  const data = [
    { name: 'Paid', value: 45.5 * id }, // Multiply by id to make it dynamic
    { name: 'Remaining', value: 55.5 * id },
  ];

  const COLORS = ['#025397', '#ddd'];
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 576);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chartSize = isSmall ? 250 : 400;
  const innerRadius = isSmall ? 70 : 120;
  const outerRadius = isSmall ? 110 : 160;
  const textY = isSmall ? 120 : 180;

  const totalValue = data[0].value + data[1].value; // Total value of Paid and Remaining
  const paidPercentage = ((data[0].value / totalValue) * 100).toFixed(2); // Calculate percentage for Paid

  return (
    <div
      style={{ marginTop: '-20px', textAlign: 'center', position: 'relative' }}
    >
      <PieChart width={chartSize} height={chartSize * 0.6}>
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <svg
        width={chartSize}
        height={chartSize * 0.6}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <text
          x={chartSize / 2}
          y={textY}
          textAnchor="middle"
          fontSize={isSmall ? '20' : '24'}
          fontWeight="bold"
          fill="#025397"
        >
          {paidPercentage}%
        </text>
        <text
          x={chartSize / 2}
          y={textY + 30}
          textAnchor="middle"
          fontSize={isSmall ? '16' : '20'}
          fontWeight="bold"
          fill="#000"
        >
          Loan Paid
        </text>
      </svg>
    </div>
  );
};

export default LoanCharts;
