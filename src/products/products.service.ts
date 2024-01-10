import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return createProductDto;
  }

  findAll(pageNo: number, pageRows: number) {
    return {
      pageNo: pageNo,
      pageRows: pageRows,
    };
  }

  findOne(id: number) {
    return { productId: id };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return { ...updateProductDto };
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
