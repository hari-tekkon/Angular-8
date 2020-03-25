import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './models/app-state.model';
import {Observable} from 'rxjs';
import {Shopping} from './models/shopping.model';
import {LoadShopping, ShoppingAdd, ShoppingAddSuccess, ShoppingDelete, ShoppingDeleteSuccess} from './actions/shopping.actions';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjsangularapp';
  shoppingItems$: Observable<Shopping[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newShoppingAdd: Shopping = {id: '', name: ''};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadShopping());
  }


  addItem() {
    this.newShoppingAdd.id = uuid();
    this.store.dispatch(new ShoppingAdd(this.newShoppingAdd));
    this.newShoppingAdd = {id: '', name: ''};
  }

  deleteItem(id: string) {
    this.store.dispatch((new ShoppingDelete(id)));
  }
}
