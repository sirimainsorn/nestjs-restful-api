import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
