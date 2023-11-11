import React, { FC } from 'react';

export const LegendSymbol: FC<{ bgColor: string }> = ({ bgColor }) => {
  return <div className="symbol h-3 w-3 rounded-sm" style={{ backgroundColor: bgColor }} />;
};
