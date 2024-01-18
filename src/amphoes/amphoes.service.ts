import { Injectable } from '@nestjs/common';
import { CreateAmphoeDto } from './dto/create-amphoe.dto';
import { UpdateAmphoeDto } from './dto/update-amphoe.dto';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Amphoe } from './entities/amphoe.entity';

var amphoesPath = join(process.cwd(), '/src/files/provinces.json');
var amphoesData = readFileSync(amphoesPath).toString();

@Injectable()
export class AmphoesService {
  amphoes: Amphoe[] = JSON.parse(amphoesData) || [];

  create(createAmphoeDto: CreateAmphoeDto) {
    return 'This action adds a new amphoe';
  }

  findAll() {
    const newData = JSON.parse(amphoesData).find(
      (province: any) => province.provinceId === 10,
    )['amphoes'];
    console.log(newData);

    try {
      return {
        recordTotal: newData.length,
        data: newData,
      };
    } catch (error) {
      console.log(`FIND ALL ERROR: ${error}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} amphoe`;
  }

  update(id: number, updateAmphoeDto: UpdateAmphoeDto) {
    return `This action updates a #${id} amphoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} amphoe`;
  }
}
