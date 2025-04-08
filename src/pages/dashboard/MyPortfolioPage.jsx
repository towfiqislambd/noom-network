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

const MyPortfolioPage = () => {
    const data = [
        { year: 1, NetWorth: 10000 },
        { year: 2, NetWorth: 15000 },
        { year: 3, NetWorth: 20500 },
        { year: 4, NetWorth: 26500 },
        { year: 5, NetWorth: 33000 },
        { year: 6, NetWorth: 40000 },
        { year: 7, NetWorth: 47500 },
        { year: 8, NetWorth: 56000 },
        { year: 9, NetWorth: 65000 },
        { year: 10, NetWorth: 75000 },
        { year: 11, NetWorth: 86000 },
        { year: 12, NetWorth: 97500 },
        { year: 13, NetWorth: 109000 },
        { year: 14, NetWorth: 121000 },
        { year: 15, NetWorth: 133500 },
        { year: 16, NetWorth: 146500 },
        { year: 17, NetWorth: 160000 },
        { year: 18, NetWorth: 174000 },
        { year: 19, NetWorth: 188500 },
        { year: 20, NetWorth: 203500 },
        { year: 21, NetWorth: 219000 },
        { year: 22, NetWorth: 235000 },
        { year: 23, NetWorth: 251500 },
        { year: 24, NetWorth: 268500 },
        { year: 25, NetWorth: 286000 },
        { year: 26, NetWorth: 304000 },
        { year: 27, NetWorth: 322500 },
        { year: 28, NetWorth: 341500 },
        { year: 29, NetWorth: 361000 },
        { year: 30, NetWorth: 381000 },
    ];
    // Multiply the values by the provided id to make the chart dynamic

    const cardinal = curveCardinal.tension(0.2);
    return (
        <div className="bg-white p-5 lg:px-10 lg:py-8 xl:px-14 xl:py-10 rounded shadow-lg">
            <h3 className="font-semibold text-[22px] mb-5 text-headingTextColor">
                Project Net Worth
            </h3>
            <div className="">
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 50, bottom: 0 }} // increase left margin
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
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
            </div>
        </div>
    );
};

export default MyPortfolioPage;