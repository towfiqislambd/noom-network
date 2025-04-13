import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { curveCardinal } from "d3-shape";
import { useGetSingleProperty } from "@/hooks/cms.queries";
import { useMemo } from "react";

const NetWorthCharts = ({ id }) => {
  const { data: singlePropertyData } = useGetSingleProperty(id);

  const parsedData = useMemo(() => {
    if (!singlePropertyData?.graph_data) return [];
    try {
      return singlePropertyData?.graph_data;
    } catch (e) {
      console.error("Error parsing graph_data:", e);
      return [];
    }
  }, [singlePropertyData]);

  const updatedData = useMemo(() => {
    return parsedData.map((item) => ({
      ...item,
      Value: item.Value,
      Debt: item.Dept,
      NetWorth: item.Value - item.Dept,
    }));
  }, [parsedData]);

  //  const data = JSON.parse(singlePropertyData?.graph_data);
  // const data = [
  //   { year: 1, Value: 40000, Dept: 30000, NetWorth: 10000 },
  //   { year: 2, Value: 44000, Dept: 29000, NetWorth: 15000 },
  //   { year: 3, Value: 48500, Dept: 28000, NetWorth: 20500 },
  //   { year: 4, Value: 53500, Dept: 27000, NetWorth: 26500 },
  //   { year: 5, Value: 59000, Dept: 26000, NetWorth: 33000 },
  //   { year: 6, Value: 65000, Dept: 25000, NetWorth: 40000 },
  //   { year: 7, Value: 71500, Dept: 22000, NetWorth: 47500 },
  //   { year: 8, Value: 79000, Dept: 21000, NetWorth: 56000 },
  //   { year: 9, Value: 87000, Dept: 20000, NetWorth: 65000 },
  //   { year: 10, Value: 96000, Dept: 19000, NetWorth: 75000 },
  //   { year: 11, Value: 106000, Dept: 18000, NetWorth: 86000 },
  //   { year: 12, Value: 116500, Dept: 15000, NetWorth: 97500 },
  //   { year: 13, Value: 127000, Dept: 12000, NetWorth: 109000 },
  //   { year: 14, Value: 138000, Dept: 11000, NetWorth: 121000 },
  //   { year: 15, Value: 149500, Dept: 10000, NetWorth: 133500 },
  //   { year: 16, Value: 161500, Dept: 8000, NetWorth: 146500 },
  //   { year: 17, Value: 174000, Dept: 6000, NetWorth: 160000 },
  //   { year: 18, Value: 187000, Dept: 4000, NetWorth: 174000 },
  //   { year: 19, Value: 200500, Dept: 2000, NetWorth: 188500 },
  //   { year: 20, Value: 214500, Dept: 0, NetWorth: 203500 },
  //   { year: 21, Value: 229000, Dept: 0, NetWorth: 219000 },
  //   { year: 22, Value: 244000, Dept: 0, NetWorth: 235000 },
  //   { year: 23, Value: 259500, Dept: 0, NetWorth: 251500 },
  //   { year: 24, Value: 275500, Dept: 0, NetWorth: 268500 },
  //   { year: 25, Value: 292000, Dept: 0, NetWorth: 286000 },
  //   { year: 26, Value: 309000, Dept: 0, NetWorth: 304000 },
  //   { year: 27, Value: 326500, Dept: 0, NetWorth: 322500 },
  //   { year: 28, Value: 344500, Dept: 0, NetWorth: 341500 },
  //   { year: 29, Value: 363000, Dept: 0, NetWorth: 361000 },
  //   { year: 30, Value: 382000, Dept: 0, NetWorth: 381000 },
  // ];

  // Multiply the values by the provided id to make the chart dynamic

  const cardinal = curveCardinal.tension(0.2);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={updatedData}
        margin={{ top: 10, right: 30, left: 50, bottom: 0 }} // increase left margin
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" domain={["0", "auto"]} />
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
          dataKey="Debt"
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
