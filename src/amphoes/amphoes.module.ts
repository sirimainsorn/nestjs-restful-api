import { Module } from '@nestjs/common';
import { AmphoesService } from './amphoes.service';
import { AmphoesController } from './amphoes.controller';

@Module({
  controllers: [AmphoesController],
  providers: [AmphoesService],
})
export class AmphoesModule {}
