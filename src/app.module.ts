import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProvincesModule } from './provinces/provinces.module';
import { AmphoesModule } from './amphoes/amphoes.module';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule, ProvincesModule, AmphoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
