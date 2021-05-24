import {
  BlackBarSvg,
  BlackNormalFaceSvg,
  BlueBottomTriangleSvg,
  BlueSadFaceSvg,
  RedHappyFaceSvg,
  RedTopTriangleSvg,
} from '../../assets/stockItem';

export const StockTheme = {
  default: '#2F2F2F',
  positive: '#F51818',
  negative: '#1B61D1',
  zero: '#2F2F2F',
};

export const StockFaceTheme = {
  default: BlackNormalFaceSvg,
  positive: RedHappyFaceSvg,
  negative: BlueSadFaceSvg,
  zero: BlackNormalFaceSvg,
};

export const StockSignTheme = {
  default: BlackBarSvg,
  positive: RedTopTriangleSvg,
  negative: BlueBottomTriangleSvg,
  zero: BlackBarSvg,
};
