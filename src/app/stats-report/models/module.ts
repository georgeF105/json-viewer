import { Reason } from './reason';

export interface Module {
  assets: any;
  built: boolean;
  cacheable: true;
  children: any;
  chunks: Array<number>;
  depth: number;
  errors: Array<any>;
  failed: boolean;
  id: string;
  identifier: string;
  index: number;
  index2: number;
  issuer: string;
  issuerId: number;
  issuerName: string;
  name: string;
  optimizationBailout: any;
  optional: boolean;
  prefetched: boolean;
  profile: any;
  providedExports: any;
  reasons: Array<Reason>;
  size: number;
  source: string;
  usedExports: Array<any>;
  warnings: Array<any>;
}
