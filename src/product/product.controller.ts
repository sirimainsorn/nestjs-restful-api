import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
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

  @Get('/:id')
  getProductById(@Param('id') id: string): object {
    return {
      id: id,
    };
  }
}
