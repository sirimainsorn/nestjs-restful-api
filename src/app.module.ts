import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';

@Module({
  imports: [ProductModule, AddressModule],
  controllers: [AppController, AddressController],
  providers: [AppService],
})
export class AppModule {}
