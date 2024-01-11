import { ApiProperty, PartialType } from '@nestjs/swagger';
// import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  passwords: string;
}
