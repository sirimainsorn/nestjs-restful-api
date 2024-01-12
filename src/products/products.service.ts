import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

var productPath = join(process.cwd(), '/src/files/products.json');
var productData = readFileSync(productPath).toString();
@Injectable()
export class ProductsService {
  products: Product[] = JSON.parse(productData) || [];

  create(createProductDto: CreateProductDto) {
    this.products.push({
      ...createProductDto,
      productId: this.products.length + 1,
    });

    return { ...createProductDto, productId: 1 };
  }

  async findAll(pageNo: number, pageRows: number) {
    const offset = (pageNo - 1) * pageRows;
    const newData = JSON.parse(productData).splice(offset, pageRows);

    try {
      return {
        pageNo: pageNo,
        pageRows: pageRows,
        recordTotal: this.products.length,
        data: newData,
      };
    } catch (error) {
      console.log(`FIND ALL ERROR: ${error}`);
    }
  }

  findOne(id: number) {
    const findById = this.products.find((item) => item.productId === id);

    return findById;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return updateProductDto;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
