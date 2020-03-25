import {Shopping} from '../models/shopping.model';
import {ShoppingAction} from '../actions/shopping.actions';
import {ShoppingActionTypes} from '../shared/enum/shopping-action-types.enum';

export interface ShoppingState {
  list: Shopping[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.Load_Shopping:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.Load_Success:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ShoppingActionTypes.Load_Failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.Add:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.Add_Success:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ShoppingActionTypes.Add_Failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ShoppingActionTypes.Delete:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.Delete_Success:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case ShoppingActionTypes.Delete_Failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
