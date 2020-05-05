import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from 'src/app/shared/models/product';
import { CartItem } from '../models/cart-item';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should add new product to cart', () => {
    const service: CartService = TestBed.get(CartService);
    const product = new Product();
    product.id = 1;
    product.name = "new product";
    product.price = 100;

    // Act
    service.addProduct(product);

    // Assert
    const cartItem = service.cartItems[0];
    expect(cartItem.productId).toBe(product.id);
    expect(cartItem.name).toBe(product.name);

    expect(service.cartQuantity).toBe(1);
    expect(service.cartSum).toBe(product.price);
  });

  it('should increase product in cart item', () => {
    const service: CartService = TestBed.get(CartService);
    const cartItem = new CartItem();
    cartItem.productId = 1;
    cartItem.name = "exist product";
    cartItem.count = 1;
    cartItem.pricePerOne = 100;
    service.cartItems.push(cartItem);

    const product = new Product();
    product.id = 1;
    product.name = "new product";
    product.price = cartItem.pricePerOne;

    // Act
    service.addProduct(product);

    // Assert
    expect(cartItem.count).toBe(2);
    expect(service.cartQuantity).toBe(2);
    expect(service.cartSum).toBe(product.price * cartItem.count);
  });
});
