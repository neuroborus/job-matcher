import { Controller, Post } from '@nestjs/common';
import { ComparisonService } from '@/features/comparison';
import { Body } from '@nestjs/common';
import { CompareTextsDTO } from './compare-texts.dto';

@Controller()
export class CompareController {
  constructor(private readonly comparison: ComparisonService) {}

  @Post('compare-txt')
  compare(@Body() request: CompareTextsDTO): Promise<string> {
    return this.comparison.getSimilarity(request.cv, request.job);
  }
}
