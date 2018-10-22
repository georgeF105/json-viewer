export interface Asset {
  chunkNames: Array<string>;
  chunks: Array<number>;
  emitted: boolean;
  name: string;
  size: any;
}
