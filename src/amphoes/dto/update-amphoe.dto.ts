import { PartialType } from '@nestjs/swagger';
import { CreateAmphoeDto } from './create-amphoe.dto';

export class UpdateAmphoeDto extends PartialType(CreateAmphoeDto) {}
