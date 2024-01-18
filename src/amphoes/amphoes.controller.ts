import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AmphoesService } from './amphoes.service';
import { CreateAmphoeDto } from './dto/create-amphoe.dto';
import { UpdateAmphoeDto } from './dto/update-amphoe.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('amphoes')
@ApiTags('provinces')
export class AmphoesController {
  constructor(private readonly amphoesService: AmphoesService) {}

  @Post()
  create(@Body() createAmphoeDto: CreateAmphoeDto) {
    return this.amphoesService.create(createAmphoeDto);
  }

  @Get()
  findAll(@Query('provinceId') provinceId: string) {
    return this.amphoesService.findAll(parseInt(provinceId));
  }

  @Get(':provinceId')
  findOne(
    @Param('provinceId') provinceId: string,
    @Query('amphoesId') amphoesId: string,
  ) {
    return this.amphoesService.findOne(+provinceId, parseInt(amphoesId));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmphoeDto: UpdateAmphoeDto) {
    return this.amphoesService.update(+id, updateAmphoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amphoesService.remove(+id);
  }
}
