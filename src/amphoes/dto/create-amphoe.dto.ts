import { ApiProperty } from '@nestjs/swagger';

export class CreateAmphoeDto {
  @ApiProperty()
  provinceId: number;

  @ApiProperty()
  amphoesId: number;

  @ApiProperty()
  amphoesTH: string;

  @ApiProperty()
  amphoesEN: string;
}
