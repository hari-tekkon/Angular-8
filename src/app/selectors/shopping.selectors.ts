import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ShoppingState} from '../reducers/shopping.reducers';

export const getShoppingState = createFeatureSelector<ShoppingState>('shopping');

export const getListState = createSelector(
  getShoppingState,
  (state: ShoppingState) => state.list
);
export const getLoadingState = createSelector(
  getShoppingState,
  (state) => state.loading
);
