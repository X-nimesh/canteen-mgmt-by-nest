import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
