import { Asset } from './asset';
import { Chunk } from './chunk';
import { Module } from './module';

export interface Stats {
  assets: Array<Asset>;
  assetsByChunkName: any;
  children: any;
  chunks: Array<Chunk>;
  entrypoints: any;
  errors: any;
  filteredAsset: any;
  filteredModule: any;
  hash: string;
  modules: Array<Module>;
  publicPat: any;
  time: any;
  version: any;
  warnings: any;
}
