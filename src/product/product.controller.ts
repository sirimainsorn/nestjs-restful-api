import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getProductAll(
    @Query('pageNo', new DefaultValuePipe(1), ParseIntPipe) pageNo: number,
    @Query('pageRows', new DefaultValuePipe(10), ParseIntPipe) pageRows: number,
  ): object {
    return {
      pageNo: pageNo,
      pageRows: pageRows,
    };
  }
}
