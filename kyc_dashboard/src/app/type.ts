export type TTotalKyc = {
  new: { count: number; change: number };
  modified: { count: number; change: number };
};

export type TBarChart = {
  today: { individual: number; nonIndividual: number };
  yesterday: { individual: number; nonIndividual: number };
};

export type TKycStatus = {
  initiated: number;
  underProcess: number;
  registered: number;
  validated: number;
  hold: number;
  docsPending: number;
};

export type TCategories = {
  filter(arg0: (cat: any) => boolean): unknown;
  individual: { RI: number; NRI: number };
  nonIndividual: { RI: number; NRI: number };
};

export type TPanStats = {
  solicited: { withImage: number; withoutImage: number; total: number };
  received: { withImage: number; withoutImage: number; total: number };
};

export type TCircular = {
  solicited: { total: number; received: number; consumed: number; pending: number };
};

export type DashboardData = {
  totalKyc: TTotalKyc;
  totalKycCount: number;
  barChart: TBarChart;
  kycStatus: TKycStatus;
  categories: TCategories;
  panStats: TPanStats;
  circularChart: TCircular;
};
