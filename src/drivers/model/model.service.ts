import { Injectable } from '@nestjs/common';
import { TokenClassificationPipeline } from '@huggingface/transformers';
import { ModelEntity } from '@/entities/model';

@Injectable()
export class ModelService {
  constructor(private readonly model: TokenClassificationPipeline) {}

  public async extractEntities(text: string): Promise<ModelEntity[]> {
    // entity extraction
    const raw = await this.model(text);
    return raw.map((r) => r as ModelEntity);
  }
}
