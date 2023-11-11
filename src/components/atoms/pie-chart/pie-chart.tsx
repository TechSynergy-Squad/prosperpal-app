import { FC } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { LegendSymbol } from "../legend-symbol";
import { AssetAllocationsProps, TooltipProps } from "./types";

export const PieChartGraph: FC<AssetAllocationsProps> = ({
  assetColors,
  assetAllocations,
}) => {
  const fills = assetColors;
  const CustomTooltip: FC<TooltipProps> = ({ payload }) => {
    if (payload && payload.length) {
      const { assetClassName, actualAssetClassPerc } = payload[0].payload;
      return (
        <div className="custom-tooltip flex flex-col rounded-2xl border bg-white p-2 opacity-70 shadow-sm drop-shadow-sm focus:border">
          <h1 className="text-center font-extralight text-black">{`${assetClassName}: ${actualAssetClassPerc.toFixed(
            2
          )}%`}</h1>
        </div>
      );
    }
    return null;
  };
  return (
    <section className="pie-chart grid min-h-[80%] place-items-center gap-2 text-[#748AA1] md:grid-cols-2 lg:flex-row lg:items-center">
      <div style={{ width: 200, height: 150 }}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={assetAllocations}
              cx="50%"
              cy="50%"
              dataKey="actualAssetClassPerc"
              innerRadius={50}
              outerRadius={65}
            >
              {assetAllocations?.map((entry, index) => {
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
          {assetAllocations?.map(({ assetClassName }, index) => (
            <div key={assetClassName} className="flex items-center gap-2">
              <LegendSymbol bgColor={fills[index]} />
              <span className="text-xs">{assetClassName}</span>
            </div>
          ))}
        </div>
        <div className="percentiles">
          <h3 className="text-sm font-light text-[#8D8D8D]">Percentile</h3>
          {assetAllocations?.map(({ actualAssetClassPerc }, index) => (
            <p className="text-xs" key={index}>
              {actualAssetClassPerc.toFixed(1)}%
            </p>
          ))}
        </div>
      </section>
    </section>
  );
};
