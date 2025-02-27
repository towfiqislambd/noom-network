import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Paid", value: 45.5 },
    { name: "Remaining", value: 55.5 },
];
const COLORS = ["#025397", "#ddd"];

const LoanCharts = () => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 576);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 576);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const chartSize = isSmall ? 250 : 400;
    const innerRadius = isSmall ? 70 : 120;
    const outerRadius = isSmall ? 110 : 160;
    const textY = isSmall ? 120 : 180;

    return (
        <div style={{ marginTop: "-20px", textAlign: "center", position: "relative" }}>
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

            <svg width={chartSize} height={chartSize * 0.6} style={{ position: "absolute", top: 0, left: 0 }}>
                <text x={chartSize / 2} y={textY} textAnchor="middle" fontSize={isSmall ? "20" : "24"} fontWeight="bold" fill="#025397">
                    45.5%
                </text>
                <text x={chartSize / 2} y={textY + 30} textAnchor="middle" fontSize={isSmall ? "16" : "20"} fontWeight="bold" fill="#000">
                    Loan Paid
                </text>
            </svg>
        </div>
    );
};

export default LoanCharts;
