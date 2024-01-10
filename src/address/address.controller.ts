import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('address')
@Controller('address')
export class AddressController {
  @Get()
  getAddressAll(@Param('pageNo') pageNo: number): object {
    pageNo = 1;
    return { pageNo: pageNo };
  }
}
