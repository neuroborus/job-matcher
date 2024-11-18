import * as dotenv from 'dotenv';
dotenv.config();
import * as process from 'node:process';
import { ConfigModel } from '@/entities/config';
import { DType } from '@/entities/model';

const envModel = process.env.MODEL;
if (!envModel) throw new Error('env MODEL must be defined!');

const envDType = process.env.MODEL_DTYPE;

const model: ConfigModel = {
  model: envModel,
  modelFileName: process.env.MODEL_FILENAME!,
  task: 'token-classification',
  device: 'cpu',
  dtype: envDType ? (envDType as DType) : undefined,
};

export const configuration = () => {
  return {
    port: process.env.PORT,
    model,
    token: process.env.HF_TOKEN,
  };
};
