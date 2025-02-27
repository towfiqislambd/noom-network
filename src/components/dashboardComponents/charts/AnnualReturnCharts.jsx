import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
    { name: "Category A", value: 30 },
    { name: "Category B", value: 25 },
    { name: "Category C", value: 20 },
    { name: "Category D", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AnnualReturnCharts = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 576);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <PieChart width={isSmallScreen ? 235 : 400} height={isSmallScreen ? 235 : 400}>
                <Pie
                    data={data}
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
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend
                    layout="vertical"
                    align={isSmallScreen ? "center" : "right"}
                    verticalAlign={isSmallScreen ? "bottom" : "middle"}
                />
            </PieChart>
        </div>
    );
};

export default AnnualReturnCharts;
