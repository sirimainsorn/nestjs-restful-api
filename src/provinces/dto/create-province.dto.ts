import { ApiProperty } from '@nestjs/swagger';

export class CreateProvinceDto {
  @ApiProperty()
  provinceId: number;

  @ApiProperty()
  provinceTH: string;

  @ApiProperty()
  provinceEN: string;
}
