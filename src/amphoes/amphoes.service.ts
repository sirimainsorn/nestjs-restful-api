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

  async create(createAmphoeDto: CreateAmphoeDto) {
    console.log(createAmphoeDto);

    this.amphoes
      .find((prov: any) => prov.provinceId === createAmphoeDto.provinceId)
      ['amphoes'].push(createAmphoeDto);

    try {
      const frameworksData = JSON.stringify(this.amphoes);
      writeFileSync(amphoesPath, frameworksData, 'utf-8');

      return createAmphoeDto;
    } catch (error) {
      console.log(`CREATE: ${error}`);
    }
  }

  async findAll(provinceId: number) {
    const newData = JSON.parse(amphoesData).find(
      (province: any) => province.provinceId === provinceId,
    )['amphoes'];

    try {
      return {
        recordTotal: newData.length,
        data: newData,
      };
    } catch (error) {
      console.log(`FIND ALL ERROR: ${error}`);
    }
  }

  async findOne(provinceId: number, amphoesId: number) {
    return this.amphoes
      .find((prov: any) => prov.provinceId === provinceId)
      ['amphoes'].find((amph: any) => amph.amphoesId === amphoesId);
  }

  update(id: number, updateAmphoeDto: UpdateAmphoeDto) {
    return `This action updates a #${id} amphoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} amphoe`;
  }
}
