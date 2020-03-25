import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Shopping} from './models/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shopping_url = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<Shopping>(this.shopping_url).pipe(delay(500));
  }

  add(item: Shopping) {
    return this.http.post(this.shopping_url, item).pipe(delay(500));
  }

  delete(id: string) {
    return this.http.delete(`${this.shopping_url}/${id}`).pipe(delay(500));
  }
}
