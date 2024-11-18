import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { swaggerDefaults } from '../swagger-defaults';

@Exclude()
export class CompareTextsDTO {
  @Expose()
  @ApiProperty({ default: swaggerDefaults.cvText, type: String })
  cv: string;

  @Expose()
  @ApiProperty({ default: swaggerDefaults.jobText, type: String })
  job: string;
}
