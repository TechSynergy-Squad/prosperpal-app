import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Graph = () => {
  const data = [
    {
      name: "Jan 2023",
      startBalance: 45600,
      endBalance: 0,
      investments: 0,
    },
    {
      name: "Feb 2023",
      startBalance: 50000,
      endBalance: 0,
      investments: 0,
    },
    {
      name: "Mar 2023",
      startBalance: 45600,
      endBalance: 1280,
      investments: 0,
    },
    {
      name: "Apr 2023",
      startBalance: 45600,
      endBalance: 18954,
      investments: 1000,
    },
  ];

  const average = () => {
    const total = data
      .map(({ startBalance }) => startBalance)
      .reduce((acc: number, curr: number) => {
        return acc + curr;
      }, 0);

    return total / data.length;
  };
  return (
    <section className="flex flex-col">
      <div className="legend flex gap-4 justify-end text-sm">
        <div className="flex gap-2 items-center text-gray-300">
          <div className="color bg-purple-500 h-3 w-3 rounded-sm" />
          <p>End of Month</p>
          <div className="color bg-[#8884d8] h-3 w-3 rounded-sm" />
          <p>Investments</p>
          <div className="color bg-[#82ca9d] h-3 w-3 rounded-sm" />
          <p>Start of Month</p>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width={"100%"} height={250}>
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line
              type="monotone"
              dataKey="endBalance"
              stroke="rgb(168 85 247)"
            />
            <Line type="monotone" dataKey="investments" stroke="#82ca9d" />
            <Line type="monotone" dataKey="startBalance" stroke="#8884d8" />
            <YAxis tickLine={false} axisLine={false} />
            <XAxis
              dataKey="name"
              angle={10}
              padding={{ left: 30 }}
              tickLine={false}
            />
            <ReferenceDot
              /* shape={<Rectangle width={20} height={20} />} */
              y={average()}
              r={10}
              x="Mary"
              fill="white"
              strokeWidth={3}
              stroke="rgb(0,0,255)"
            />
            <Tooltip />
            <CartesianGrid vertical={false} stroke="#626262" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
