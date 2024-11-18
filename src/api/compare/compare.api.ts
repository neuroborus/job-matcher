import { Module } from '@nestjs/common';
import { ComparisonModule } from '@/features/comparison';
import { CompareController } from './compare.controller';

@Module({
  imports: [ComparisonModule],
  controllers: [CompareController],
})
export class CompareApi {}
