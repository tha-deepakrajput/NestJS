import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private product = [
    {
      id: 1,
      name: 'Mobile',
      price: 20000,
    },
    {
      id: 2,
      name: 'Tablet',
      price: 20000,
    },
    {
      id: 3,
      name: 'Laptop',
      price: 20000,
    },
  ];

  getAllProducts() {
    return this.product;
  }

  getProductById(id: number) {
    return this.product.find((product) => product.id === id);
  }
}
