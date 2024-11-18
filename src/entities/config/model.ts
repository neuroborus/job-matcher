import { DType } from '@/entities/model';

export interface ConfigModel {
  model: string;
  modelFileName?: string;
  task: 'token-classification';
  device: 'cpu';
  dtype?: DType;
}
