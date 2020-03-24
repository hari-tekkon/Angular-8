import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {Store} from '@ngrx/store';
import {TodoAdd} from '../../actions/todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store: Store<{ todos: Todo[] }>) {
  }

  AddTodo(todo: String) {
    const newTodo = new Todo();
    newTodo.title = todo;
    this.store.dispatch(new TodoAdd(newTodo));
  }

  ngOnInit(): void {
  }

}
