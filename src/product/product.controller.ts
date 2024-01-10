import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/dto/CreateProductDto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  @Get()
  async getProductAll(
    @Query('pageNo', new DefaultValuePipe(1), ParseIntPipe) pageNo: number,
    @Query('pageRows', new DefaultValuePipe(10), ParseIntPipe) pageRows: number,
  ) {
    return {
      pageNo: pageNo,
      pageRows: pageRows,
    };
  }

  @Get('/:id')
  async getProductById(@Param('id') id: string) {
    return {
      id: id,
    };
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return createProductDto;
  }
}
