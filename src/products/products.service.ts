import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  insertproduct(title: string, desc: string, price: number) {
    const prodId = Math.round(Math.random() * 1000).toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }
  getProducts() {
    return [...this.products];
  }
  getOne(id: string) {
    const product = this.products.find((p) => p.id == id);
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return { ...product };
  }
}
