import { FC } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { LegendSymbol } from "../legend-symbol";
import { PieChartProps, TooltipProps } from "./types";
import { Panel } from "..";

export const PieChartGraph: FC<PieChartProps> = ({ colors, transactions }) => {
  const fills = colors;
  const CustomTooltip: FC<TooltipProps> = ({ payload }) => {
    if (payload && payload.length) {
      const { category, percentage } = payload[0].payload;
      return (
        <div className="custom-tooltip flex flex-col rounded-2xl border bg-white p-2 opacity-70 shadow-sm drop-shadow-sm focus:border">
          <h1 className="text-center font-extralight text-black">{`${category}: ${percentage?.toFixed(
            2
          )}%`}</h1>
        </div>
      );
    }
    return null;
  };
  return (
    <Panel>
      <section className="pie-chart grid min-h-[80%] place-items-center gap-2 text-[#748AA1] md:grid-cols-2 lg:flex-row lg:items-center">
        <div style={{ width: 200, height: 150 }}>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={transactions}
                cx="50%"
                cy="50%"
                dataKey="percentage"
                innerRadius={50}
                outerRadius={65}
              >
                {transactions?.map((entry, index) => {
                  return <Cell key={`cell-${index}`} fill={fills[index]} />;
                })}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <section className="pie-legend flex gap-10 font-light">
          <div className="symbols">
            <h3 className="text-sm font-light text-[#8D8D8D]">Symbol</h3>
            {transactions?.map(({ category }, index) => (
              <div key={category} className="flex items-center gap-2">
                <LegendSymbol bgColor={fills[index]} />
                <span className="text-xs">{category}</span>
              </div>
            ))}
          </div>
          <div className="percentiles">
            <h3 className="text-sm font-light text-[#8D8D8D]">Percentile</h3>
            {transactions?.map(({ percentage }, index) => (
              <p className="text-xs" key={index}>
                {percentage.toFixed(1)}%
              </p>
            ))}
          </div>
        </section>
      </section>
    </Panel>
  );
};
