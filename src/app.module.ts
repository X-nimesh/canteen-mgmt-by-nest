import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { OrmModule } from './modules/mikroOrm/orm.module';
@Module({
  imports: [ProductModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
