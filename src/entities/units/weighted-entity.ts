import { ModelEntity } from '../model';

export type WeightedEntity = Pick<ModelEntity, 'word' | 'score'>;
