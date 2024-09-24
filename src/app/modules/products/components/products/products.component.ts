import { AfterViewInit, Component } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngAfterViewInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log(products);
      }
    });
  }
}
