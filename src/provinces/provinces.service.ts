import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Province } from './entities/province.entity';

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
      console.log(`CREATE ERROR: ${error}`);
    }
  }

  async findAll() {
    const newData = JSON.parse(provincesData).map((item) => ({
      provinceId: item.provinceId,
      provinceTH: item.provinceTH,
      provinceEN: item.provinceEN,
    }));

    try {
      return {
        recordTotal: this.provinces.length,
        data: newData,
      };
    } catch (error) {
      console.log(`FIND ALL ERROR: ${error}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  update(id: number, updateProvinceDto: UpdateProvinceDto) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
