import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  productArray: Product[] = [];

  create(createProductDto: CreateProductDto) {
    this.productArray.push({
      ...createProductDto,
      productId: this.productArray.length + 1,
    });

    return { ...createProductDto, productId: 1 };
  }

  findAll(pageNo: number, pageRows: number) {
    return {
      pageNo: pageNo,
      pageRows: pageRows,
      recordTotal: this.productArray.length,
      data: this.productArray,
    };
  }

  findOne(id: number) {
    const findById = this.productArray.find((item) => item.productId === id);

    return findById;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return updateProductDto;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
