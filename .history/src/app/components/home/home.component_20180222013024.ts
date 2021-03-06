import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductService } from '../../services/product/product.service';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _productService: ProductService,
    
  ) { }

  products: any = [];
  selectedItem: any = {};
  productStore: any = [];

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(Data => {
      this.products = Data;
      console.log(this.products);
    });

    const productChunks = [];
    const chunkSize = 3;
    for (let index = 0; index < this.products.length; index++) {
      productChunks.push(this.products[index]);

    }
    console.log(this.products);
  }

  onSelectObject(item: any) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

  SaveItemToCart(item: any) {
    this.selectedItem = item;
    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up saved video of: ', this.selectedItem);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this._productService.purchaseProduct(this.selectedItem)
      .subscribe(resNewProduct => {
        this.productStore.push(resNewProduct);
        this.selectedItem = resNewProduct;
    });
  }

  deleteProduct(item: any) {
    this.selectedItem = item;
    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this._productService.deleteProduct(this.selectedItem);

  }

}
