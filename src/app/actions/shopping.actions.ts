import {Shopping} from '../models/shopping.model';
import {Action} from '@ngrx/store';
import {ShoppingActionTypes} from '../shared/enum/shopping-action-types.enum';

export class LoadShopping implements Action {
  readonly type = ShoppingActionTypes.Load_Shopping;
}

export class LoadShoppingSuccess implements Action {
  readonly type = ShoppingActionTypes.Load_Success;

  constructor(public payload: Shopping) {
  }
}

export class LoadShoppingFailure implements Action {
  readonly type = ShoppingActionTypes.Load_Failure;

  constructor(public payload: Error) {
  }
}

export class ShoppingAdd implements Action {
  readonly type = ShoppingActionTypes.Add;

  constructor(public payload: Shopping) {
  }
}

export class ShoppingAddSuccess implements Action {
  readonly type = ShoppingActionTypes.Add_Success;

  constructor(public payload: Shopping) {
  }
}

export class ShoppingAddFailure implements Action {
  readonly type = ShoppingActionTypes.Add_Failure;

  constructor(public payload: Error) {
  }
}

export class ShoppingDelete implements Action {
  readonly type = ShoppingActionTypes.Delete;

  constructor(public payload: string) {
  }
}

export class ShoppingDeleteSuccess implements Action {
  readonly type = ShoppingActionTypes.Delete_Success;

  constructor(public payload: string) {
  }
}

export class ShoppingDeleteFailure implements Action {
  readonly type = ShoppingActionTypes.Delete_Failure;

  constructor(public payload: Error) {
  }
}


export type ShoppingAction =
  | ShoppingAdd
  | ShoppingAddSuccess
  | ShoppingAddFailure
  | ShoppingDelete
  | ShoppingDeleteSuccess
  | ShoppingDeleteFailure
  | LoadShopping
  | LoadShoppingSuccess
  | LoadShoppingFailure;
