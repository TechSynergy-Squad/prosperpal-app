export type AssetAllocationsProps = {
  assetAllocations: Asset[];
  assetColors: string[];
};

export type Asset = {
  assetClassName: string;
  actualAssetClassPerc: number;
};

export type TooltipProps = {
  payload?: {
    payload: {
      assetClassName: string;
      actualAssetClassPerc: number;
    };
  }[];
};
