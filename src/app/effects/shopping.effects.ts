import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  LoadShopping,
  LoadShoppingFailure,
  LoadShoppingSuccess,
  ShoppingAdd,
  ShoppingAddFailure,
  ShoppingAddSuccess, ShoppingDelete, ShoppingDeleteFailure, ShoppingDeleteSuccess
} from '../actions/shopping.actions';
import {ShoppingActionTypes} from '../shared/enum/shopping-action-types.enum';
import {merge, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ShoppingService} from '../shopping.service';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShopping>(ShoppingActionTypes.Load_Shopping),
    mergeMap(
      () => this.shoppingService.get()
        .pipe(
          map(data => new LoadShoppingSuccess(data)),
          catchError(error => of(new LoadShoppingFailure(error)))
        )
    )
  );

  @Effect() addShopping$ = this.actions$.pipe(
    ofType<ShoppingAdd>(ShoppingActionTypes.Add),
    mergeMap(data => this.shoppingService.add(data.payload)
      .pipe(
        map(() => new ShoppingAddSuccess(data.payload)),
        catchError(error => of(new ShoppingAddFailure(error)))
      )
    )
  );

  @Effect() deleteShopping = this.actions$.pipe(
    ofType<ShoppingDelete>(ShoppingActionTypes.Delete),
    mergeMap(data => this.shoppingService.delete(data.payload)
      .pipe(
        map(() => new ShoppingDeleteSuccess(data.payload)),
        catchError(error => of(new ShoppingDeleteFailure(error)))
      )
    )
  );

  constructor(private actions$: Actions, private shoppingService: ShoppingService) {
  }
}
