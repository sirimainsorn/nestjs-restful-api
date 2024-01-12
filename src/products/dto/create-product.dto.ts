import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  productName: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  picture: string;

  @ApiProperty()
  productStore: string;

  @ApiProperty()
  productDescription: string;

  @ApiProperty()
  createDate: Date;

  @ApiProperty()
  updateDate: Date;
}
