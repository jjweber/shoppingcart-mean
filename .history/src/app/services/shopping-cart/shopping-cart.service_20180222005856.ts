import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Product } from './../../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoppingCartService {

  private _getUrl = '/api/products';
  private _postUrl = '/api/product';
  private _deleteUrl = '/api/product/:id';

  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addVideo(product: Product) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(product), options)
      .map((response: Response) => response.json());
  }

  deleteVideo(product: Product) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._deleteUrl, JSON.stringify(product), options)
      .map((response: Response) => response.json());
  }

}
