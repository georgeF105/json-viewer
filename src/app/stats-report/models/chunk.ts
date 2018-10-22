import { Module } from './module';

export interface Chunk {
  entry: boolean;
  extraAsync: any;
  files: any;
  filteredModule: any;
  hash: string;
  id: number;
  initial: boolean;
  modules: Array<Module>;
  names: Array<any>;
  origins: any;
  parents: Array<number>;
  rendered: boolean;
  size: number;
}
