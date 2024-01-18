import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Province } from './entities/province.entity';

var thailandPath = join(process.cwd(), '/src/files/thailand.json');
var thailandData = readFileSync(thailandPath).toString();

var provincesPath = join(process.cwd(), '/src/files/provinces.json');
var provincesData = readFileSync(provincesPath).toString();

@Injectable()
export class ProvincesService {
  provinces: Province[] = JSON.parse(provincesData) || [];

  async create(createProvinceDto: CreateProvinceDto) {
    this.provinces.push(createProvinceDto);

    try {
      const frameworksData = JSON.stringify(this.provinces);

      writeFileSync(provincesPath, frameworksData, 'utf-8');

      return this.provinces;
    } catch (error) {
      console.log(`CREATE: ${error}`);
    }
  }

  async findAll() {
    const newData = JSON.parse(provincesData).map((item: any) => ({
      provinceId: item.provinceId,
      provinceTH: item.provinceTH,
      provinceEN: item.provinceEN,
    }));

    console.log(Object.keys(JSON.parse(thailandData)).length);

    try {
      return {
        recordTotal: this.provinces.length,
        data: newData,
      };
    } catch (error) {
      console.log(`FIND ALL ERROR: ${error}`);
    }
  }

  async findOne(id: number) {
    return this.provinces.find((province) => province.provinceId === id);
  }

  update(id: number, updateProvinceDto: UpdateProvinceDto) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
