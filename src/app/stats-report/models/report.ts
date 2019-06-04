export interface LazyChild {
  name: string;
  size: number;
}

export interface Report {
  hash: string;
  lazyChildren: Array<LazyChild>;
  size: number;
}
