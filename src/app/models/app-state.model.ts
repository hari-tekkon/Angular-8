import {Shopping} from './shopping.model';
import {ShoppingState} from '../reducers/shopping.reducers';

export interface AppState {
  readonly shopping: ShoppingState;
}
