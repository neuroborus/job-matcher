import { ModelEntity } from '../model';

export type NormalizedEntity = Pick<ModelEntity, 'word' | 'entity' | 'score'>;
