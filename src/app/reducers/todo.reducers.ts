import {TodoActionTypes} from '../shared/enum/todo-action-types.enum';
import {ActionParent} from '../actions/todo.actions';
import {Todo} from '../models/todo';

export const initialState: Todo[] = [
  {title: 'todo 1'},
  {title: 'todo 2'},
  {title: 'todo 3'}
];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case TodoActionTypes.Add:
      return [...state, action.payload];
    case TodoActionTypes.Remove:
      console.log(typeof [...state]);
      let data = [...state];
      console.log(data);
      data.splice(action.payload, 1);
      return data;
    default:
      return state;
  }
}


