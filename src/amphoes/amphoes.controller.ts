import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
    return this.amphoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amphoesService.findOne(+id);
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