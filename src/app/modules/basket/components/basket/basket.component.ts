import { Component } from '@angular/core';
import { BasketProduct } from '../../../core/models/basket.module';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basketProducts: BasketProduct[] = [
    {
      name: 'TESTOWY PRODUKT',
      price: 150,
      imageUrl: 'https://i.imgur.com/kHeKKij.jpg',
      quantity: 2,
      uuid: 'test',
      summaryPrice: 300,
    },
    {
      name: 'TESTOWY PRODUKT',
      price: 150,
      imageUrl: 'https://i.imgur.com/kHeKKij.jpg',
      quantity: 2,
      uuid: 'test',
      summaryPrice: 300,
    },
  ];
  summaryPrice = 600;
}
