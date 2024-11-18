import { Injectable } from '@nestjs/common';
import { ModelService } from '@/drivers/model';
import { CalculationService } from '@/services/calculation';

@Injectable()
export class ComparisonService {
  constructor(
    private readonly model: ModelService,
    private readonly calculation: CalculationService,
  ) {}

  public async getSimilarity(cv: string, job: string): Promise<string> {
    const [cvEntities, jobEntities] = await Promise.all([
      this.model.extractEntities('[RESUME]' + cv),
      this.model.extractEntities('[JOB_DESCRIPTION]' + job),
    ]);

    const cvNormalized = this.calculation.normalizeEntities(cvEntities);
    const jobNormalized = this.calculation.normalizeEntities(jobEntities);

    const factor = this.calculation.weightedJaccardSimilarity(
      cvNormalized,
      jobNormalized,
    );

    return (factor * 100).toFixed(2) + '%';
  }
}
