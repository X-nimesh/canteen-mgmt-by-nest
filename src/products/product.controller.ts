import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body() body: { title: string; desc: string; price: number },
  ): any {
    const prodID = this.productService.insertproduct(
      body.title,
      body.desc,
      body.price,
    );
    return { id: prodID };
  }
  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }
  @Get(':id')
  getoneProduct(@Param('id') prodId: string) {
    return this.productService.getOne(prodId);
  }
}
