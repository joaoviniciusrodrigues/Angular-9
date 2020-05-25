import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessagem('Operação executada com sucesso!');
      this.router.navigate(['/products']);
    });

  }

  navegationToProductCrud() {
    this.router.navigate(['/products']);
  }

}
