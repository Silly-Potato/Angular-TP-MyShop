import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  totalPrice: number = 0;

  addToCart(product: Product) {
    let productInCart = this.items.find((p: Product) => p.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      product.quantity = 1;
      this.items.push(product);
    }
    this.updateTotalPrice();
  }

  removeOne(product: Product) {
    let index = this.items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      let curr = this.items[index];
      if (curr.quantity > 0) {
        curr.quantity--;
      }
      if (curr.quantity === 0) {
        this.items.splice(index, 1);
      }
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = 0;
    this.items.forEach((item) => {
      this.totalPrice += item.specifications.price * item.quantity;
    });
  }

  getItems() {
    return this.items;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  clearCart() {
    this.items = [];
    this.totalPrice = 0;
    return this.items;
  }
}
