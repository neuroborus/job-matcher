import { Module } from '@nestjs/common';
import { ModelModule } from '@/drivers/model';
import { CalculationModule } from '@/services/calculation';
import { ComparisonService } from './comparison.service';

@Module({
  imports: [ModelModule, CalculationModule],
  providers: [ComparisonService],
  exports: [ComparisonService],
})
export class ComparisonModule {}
